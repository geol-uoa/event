-- Create a function to safely return slot availability counts without exposing individual booking data
DROP FUNCTION IF EXISTS get_date_slot_counts();

CREATE OR REPLACE FUNCTION get_date_slot_counts()
RETURNS TABLE(date DATE, count BIGINT)
SECURITY DEFINER
STABLE
LANGUAGE sql
AS $$
    SELECT
        d.date,
        COALESCE(b.booking_count, 0)::BIGINT AS count
    FROM generate_series('2026-02-02'::DATE, '2026-02-06'::DATE, '1 day'::INTERVAL) AS d(date)
    LEFT JOIN (
        SELECT bookings.date, COUNT(*) AS booking_count
        FROM bookings
        GROUP BY bookings.date
    ) b ON d.date = b.date
    ORDER BY d.date ASC;
$$;

-- Grant execute permissions to allow frontend access via Supabase client
GRANT EXECUTE ON FUNCTION get_date_slot_counts() TO anon, authenticated;

-- Create a function to get the slot count for a specific date
CREATE OR REPLACE FUNCTION get_slot_count(event_date DATE)
RETURNS BIGINT
SECURITY DEFINER
STABLE
LANGUAGE plpgsql
AS $$
DECLARE
    slot_count BIGINT;
BEGIN
    SELECT COUNT(*) INTO slot_count
    FROM bookings
    WHERE date = event_date;

    RETURN slot_count;
END;
$$;

-- Grant execute permissions to allow frontend access via Supabase client
GRANT EXECUTE ON FUNCTION get_slot_count(DATE) TO anon, authenticated;