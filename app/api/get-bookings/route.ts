import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json(
        { success: false, error: 'Date parameter is required' },
        { status: 400 }
      )
    }

    // Fetch bookings for the specified date
    const { data, error } = await supabase
      .from('bookings')
      .select('id, school_name, contact_name, contact_email, contact_phone, comments, date')
      .eq('date', date)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching bookings:', error)
      return NextResponse.json(
        { success: false, error: 'Error fetching bookings' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      bookings: data || []
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}