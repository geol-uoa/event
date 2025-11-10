# Supabase Database Setup Instructions

## Prerequisites
- Supabase project created at https://zqsrzqzasltgscxiirfm.supabase.co
- Access to Supabase SQL Editor

## Setup Steps
1. Navigate to your Supabase project dashboard
2. Go to SQL Editor (left sidebar)
3. Execute the migration files in order:
   - `001_create_bookings_table.sql` - Creates the main bookings table
   - `002_add_booking_constraints.sql` - Adds the 2-bookings-per-date limit
   - `003_configure_rls_policies.sql` - Configures Row Level Security
   - `004_create_slot_count_function.sql` - Creates function for slot availability

## Verification
- After running migrations, verify the table exists: `SELECT * FROM bookings;`
- Test the slot count function: `SELECT * FROM get_date_slot_counts();`
- Verify RLS is enabled: Check Table Editor → bookings → Policies

## Important Notes
- Execute migrations in the exact order specified
- Each migration should complete without errors before proceeding
- RLS policies prevent direct SELECT queries from the client; use the `get_date_slot_counts()` function instead
- The trigger will automatically reject bookings when a date reaches 2 bookings

## Rollback (if needed)
Include DROP statements for each migration in reverse order for emergency rollback.