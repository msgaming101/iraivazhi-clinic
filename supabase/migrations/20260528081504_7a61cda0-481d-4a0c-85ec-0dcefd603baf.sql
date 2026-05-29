
DROP POLICY IF EXISTS "Public can read slots" ON public.appointments;
DROP VIEW IF EXISTS public.booked_slots;

-- Restrict has_role execution (only invoked from RLS policies as the table owner)
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon, authenticated;

-- Public function returning only date+slot of booked appointments (no PII)
CREATE OR REPLACE FUNCTION public.get_booked_slots(_from DATE, _to DATE)
RETURNS TABLE (appointment_date DATE, time_slot TEXT)
LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT appointment_date, time_slot
  FROM public.appointments
  WHERE status <> 'rejected'
    AND appointment_date BETWEEN _from AND _to;
$$;

GRANT EXECUTE ON FUNCTION public.get_booked_slots(DATE, DATE) TO anon, authenticated;
