-- Add contact_phone and comments fields to the bookings table
ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS contact_phone TEXT,
ADD COLUMN IF NOT EXISTS comments TEXT;

-- Update the comment on the table
COMMENT ON TABLE bookings IS 'This table stores school bookings for geology events with contact information and comments';

-- Add comments on the new columns
COMMENT ON COLUMN bookings.contact_phone IS 'Τηλέφωνο Επικοινωνίας';
COMMENT ON COLUMN bookings.comments IS 'Σχόλια για την κράτηση';