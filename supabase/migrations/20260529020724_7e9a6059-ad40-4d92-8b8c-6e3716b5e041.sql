-- 1. Auto-confirm all bookings: existing pending/approved become confirmed
UPDATE public.appointments SET status = 'confirmed' WHERE status IN ('pending', 'approved');

-- 2. New bookings are confirmed by default (removes accept/reject workflow)
ALTER TABLE public.appointments ALTER COLUMN status SET DEFAULT 'confirmed';

-- 3. Slot locking: prevent double-booking the same date+slot at the database level
CREATE UNIQUE INDEX IF NOT EXISTS appointments_unique_slot
  ON public.appointments (appointment_date, time_slot)
  WHERE status <> 'rejected';

-- 4. One appointment per phone (or email) within 24 hours
CREATE OR REPLACE FUNCTION public.enforce_booking_limit()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM public.appointments
    WHERE status <> 'rejected'
      AND created_at > now() - interval '24 hours'
      AND (
        mobile = NEW.mobile
        OR (NEW.email IS NOT NULL AND NEW.email <> '' AND email = NEW.email)
      )
  ) THEN
    RAISE EXCEPTION 'You can only book one appointment every 24 hours. Please try again later.'
      USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_enforce_booking_limit ON public.appointments;
CREATE TRIGGER trg_enforce_booking_limit
  BEFORE INSERT ON public.appointments
  FOR EACH ROW EXECUTE FUNCTION public.enforce_booking_limit();