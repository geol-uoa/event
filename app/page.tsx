import { supabase } from '@/lib/supabase'
import { PageClient } from './page-client'

export const revalidate = 60 // Revalidate data every 60 seconds

async function getEventDates() {
  const { data, error } = await supabase.rpc('get_date_slot_counts')

  if (error) {
    console.error('Error fetching slot counts:', error)
    // Return a default structure in case of error
    return [
      { date: '2026-02-02', displayDate: '', count: 0 },
      { date: '2026-02-03', displayDate: '', count: 0 },
      { date: '2026-02-04', displayDate: '', count: 0 },
      { date: '2026-02-05', displayDate: '', count: 0 },
      { date: '2026-02-06', displayDate: '', count: 0 },
    ]
  }

  return data.map((item: { date: string; count: number }) => ({
    ...item,
    displayDate: '' // displayDate will be generated on the client
  }))
}

export default async function Page() {
  const eventDates = await getEventDates()

  return <PageClient initialEventDates={eventDates} />
}
