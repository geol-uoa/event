-- Enable Row Level Security on the bookings table
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to ensure idempotency
DROP POLICY IF EXISTS allow_insert_bookings ON bookings;
DROP POLICY IF EXISTS deny_select_bookings ON bookings;

-- Create INSERT policy to allow authenticated and anonymous users to insert bookings
CREATE POLICY allow_insert_bookings ON bookings
FOR INSERT TO anon, authenticated
WITH CHECK (true);

-- Create SELECT policy to deny all direct selects for authenticated and anonymous users
CREATE POLICY deny_select_bookings ON bookings
FOR SELECT TO anon, authenticated
USING (false);