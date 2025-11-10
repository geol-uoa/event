-- Create the bookings table for storing school bookings for geology events
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE NOT NULL,
    school_name TEXT NOT NULL, -- Όνομα Σχολείου
    contact_name TEXT NOT NULL, -- Όνομα Επικοινωνίας
    contact_email TEXT NOT NULL, -- Email Επικοινωνίας
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create index on date column for efficient querying of slot availability
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings (date);

-- Create index on created_at for ordering bookings
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings (created_at);

-- Add table comment
COMMENT ON TABLE bookings IS 'This table stores school bookings for geology events';