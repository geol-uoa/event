-- Function to enforce the 2-bookings-per-date limit
CREATE OR REPLACE FUNCTION enforce_booking_limit()
RETURNS TRIGGER AS $$
BEGIN
    -- Count existing bookings for the new date
    IF (SELECT COUNT(*) FROM bookings WHERE date = NEW.date) >= 2 THEN
        -- Raise exception with Greek error message
        RAISE EXCEPTION 'Η ημερομηνία είναι πλήρης';
    END IF;
    -- Allow the insert to proceed
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the BEFORE INSERT trigger
DROP TRIGGER IF EXISTS enforce_booking_limit_trigger ON bookings;
CREATE TRIGGER enforce_booking_limit_trigger
    BEFORE INSERT ON bookings
    FOR EACH ROW
    EXECUTE FUNCTION enforce_booking_limit();

-- Add unique constraint to prevent duplicate bookings from the same school on the same date
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'unique_date_school') THEN
        ALTER TABLE bookings ADD CONSTRAINT unique_date_school UNIQUE (date, school_name);
    END IF;
END $$;