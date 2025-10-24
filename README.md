# Δραστηριότητες Γεωλογίας και Γεωπεριβάλλοντος

## Description

This is a booking system for the Geology and Geoenvironment Activities event scheduled from February 2-6, 2026. The system allows schools to book activities and manage reservations using a modern web interface.

## Technology Stack

- Next.js 14+
- TypeScript
- shadcn/ui
- Tailwind CSS
- Supabase (PostgreSQL) with Row Level Security (RLS) for data privacy

## Setup Instructions

1. Install dependencies: `npm install`
2. Copy `.env.local.example` to `.env.local` and add your Supabase credentials.
2.5. Set up the Supabase database by following instructions in `supabase/README.md`
3. Run the development server: `npm run dev`

## Database Setup

Refer to `supabase/README.md` for detailed SQL migration instructions. SQL files must be executed in Supabase SQL Editor before running the application. The database schema supports 5 event dates (Feb 2-6, 2026), maximum 2 bookings per date, and privacy protection (schools cannot view other bookings).

## Deployment

For production deployment, ensure to set up GitHub Secrets with the Supabase URL and anonymous key to securely handle environment variables.
