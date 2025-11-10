import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { data, error } = await supabase.rpc('get_date_slot_counts')

    if (error) {
      console.error('Error fetching slot counts:', error)
      // Return default dates if there's an error
      return NextResponse.json({
        success: false,
        dates: [
          { date: '2026-02-02', displayDate: '', count: 0 },
          { date: '2026-02-03', displayDate: '', count: 0 },
          { date: '2026-02-04', displayDate: '', count: 0 },
          { date: '2026-02-05', displayDate: '', count: 0 },
          { date: '2026-02-06', displayDate: '', count: 0 },
        ],
      })
    }

    const dates = data.map((item: { date: string; count: number }) => ({
      ...item,
      displayDate: '',
    }))

    return NextResponse.json({
      success: true,
      dates,
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch slot counts',
      },
      { status: 500 }
    )
  }
}

