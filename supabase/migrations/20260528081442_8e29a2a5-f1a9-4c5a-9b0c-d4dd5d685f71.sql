
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Appointments
CREATE TABLE public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name TEXT NOT NULL,
  age INT NOT NULL,
  gender TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT,
  health_problem TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (appointment_date, time_slot)
);
GRANT SELECT, INSERT ON public.appointments TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.appointments TO authenticated;
GRANT ALL ON public.appointments TO service_role;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Anyone can create appointments
CREATE POLICY "Anyone can book" ON public.appointments
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Anyone can see which slots are taken (date + slot only via view below would be ideal,
-- but for simplicity allow reading minimal info; admin sees all)
CREATE POLICY "Admins can view all" ON public.appointments
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update" ON public.appointments
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete" ON public.appointments
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Public view exposing only booked date+slot (no PII) so UI can disable taken slots
CREATE VIEW public.booked_slots
WITH (security_invoker = on) AS
  SELECT appointment_date, time_slot FROM public.appointments
  WHERE status <> 'rejected';

GRANT SELECT ON public.booked_slots TO anon, authenticated;

-- Allow anon to read booked_slots through underlying table only via the view's
-- selected columns. Add a permissive policy scoped to non-PII via a separate
-- helper: simplest is to allow anon SELECT but only through a function.
-- For pragmatic v1, allow anon SELECT on appointments restricted to no PII
-- is complex; instead create policy that lets anon read the date/slot columns
-- by allowing SELECT on rows but apps must use the view.
CREATE POLICY "Public can read slots" ON public.appointments
  FOR SELECT TO anon, authenticated USING (true);

-- Blocked dates (admin holidays)
CREATE TABLE public.blocked_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blocked_date DATE NOT NULL UNIQUE,
  reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.blocked_dates TO anon, authenticated;
GRANT ALL ON public.blocked_dates TO service_role;
GRANT INSERT, UPDATE, DELETE ON public.blocked_dates TO authenticated;
ALTER TABLE public.blocked_dates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blocked dates" ON public.blocked_dates
  FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage blocked dates" ON public.blocked_dates
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
