'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function submitBooking(formData: {
  schoolName: string
  contactName: string
  contactEmail: string
  contactPhone?: string
  comments?: string
  selectedDate: string
}) {
  const { schoolName, contactName, contactEmail, contactPhone, comments, selectedDate } = formData

  // Check current slot count
  const { data: countData, error: countError } = await supabase
    .rpc('get_slot_count', { event_date: selectedDate })

  if (countError) {
    console.error('Error fetching slot count:', countError)
    return { success: false, error: 'Σφάλμα κατά την ανάκτηση διαθέσιμων θέσεων' }
  }

  if (countData >= 2) {
    return { success: false, error: 'Δεν υπάρχουν διαθέσιμες θέσεις για αυτή την ημερομηνία' }
  }

  // Insert booking
  const { error: insertError } = await supabase
    .from('bookings')
    .insert({
      date: selectedDate,
      school_name: schoolName,
      contact_name: contactName,
      contact_email: contactEmail,
      contact_phone: contactPhone,
      comments: comments,
    })

  if (insertError) {
    console.error('Error inserting booking:', insertError)
    return { success: false, error: 'Σφάλμα κατά την υποβολή της κράτησης' }
  }

  revalidatePath('/')
  return { success: true }
}
