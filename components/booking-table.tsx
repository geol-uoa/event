'use client'

import React, { useState, useEffect } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { BookingDialog } from '@/components/booking-dialog'

type EventDate = {
  date: string
  displayDate: string
  count: number
}

type Booking = {
  id: number
  school_name: string
  contact_name: string
  contact_email: string
  contact_phone?: string
  comments?: string
  date: string
}

interface BookingTableProps {
  initialEventDates: EventDate[]
}

export function BookingTable({ initialEventDates }: BookingTableProps) {
  const [eventDates] = useState<EventDate[]>(initialEventDates)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<EventDate | null>(null)
  const [bookings, setBookings] = useState<Record<string, Booking[]>>({})
  const [expandedComments, setExpandedComments] = useState<Record<number, boolean>>({})

  useEffect(() => {
    // Fetch bookings for each date
    const fetchBookings = async () => {
      try {
        const bookingsByDate: Record<string, Booking[]> = {}
        
        for (const eventDate of eventDates) {
          const response = await fetch(`/api/get-bookings?date=${eventDate.date}`)
          if (response.ok) {
            const data = await response.json()
            bookingsByDate[eventDate.date] = data.bookings || []
          }
        }
        
        setBookings(bookingsByDate)
      } catch (error) {
        console.error('Error fetching bookings:', error)
      }
    }
    
    fetchBookings()
  }, [eventDates])

  const toggleComment = (bookingId: number) => {
    setExpandedComments((prev: Record<number, boolean>) => ({
      ...prev,
      [bookingId]: !prev[bookingId]
    }))
  }

  const truncateText = (text: string, maxLength: number = 50) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  const getDisplayDate = (dateString: string): string => {
    const date = new Date(dateString)
    const day = new Intl.DateTimeFormat('el-GR', { weekday: 'long' }).format(date)
    const dayOfMonth = date.getDate()
    const month = new Intl.DateTimeFormat('el-GR', { month: 'long' }).format(date)
    const year = date.getFullYear()
    return `${day} ${dayOfMonth} ${month} ${year}`
  }

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50 hover:bg-secondary/50">
              <TableHead className="font-semibold text-foreground py-4 px-6">
                Ημερομηνία
              </TableHead>
              <TableHead className="font-semibold text-foreground py-4 px-6 text-center">
                Διαθέσιμες Θέσεις
              </TableHead>
              <TableHead className="font-semibold text-foreground py-4 px-6 text-right">
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventDates.map((event: EventDate) => {
              const isFull = event.count >= 60
              const dateBookings = bookings[event.date] || []
              
              return (
                <React.Fragment key={event.date}>
                  <TableRow
                    className="hover:bg-secondary/30 transition-colors duration-150"
                  >
                    <TableCell className="py-5 px-6 font-medium text-foreground">
                      {getDisplayDate(event.date)}
                    </TableCell>
                    <TableCell className="py-5 px-6 text-center">
                      <span className={`inline-flex items-center justify-center min-w-[70px] px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                        isFull
                          ? 'text-red-700 bg-red-50 border border-red-200'
                          : 'text-green-700 bg-green-50 border border-green-200'
                      }`}>
                        {event.count}/60
                      </span>
                    </TableCell>
                    <TableCell className="py-5 px-6 text-right">
                      <Button
                        disabled={isFull}
                        onClick={() => {
                          setSelectedDate(event)
                          setDialogOpen(true)
                        }}
                        className="min-w-[110px]"
                        variant={isFull ? "outline" : "default"}
                      >
                        {isFull ? 'Πλήρης' : 'Επιλογή'}
                      </Button>
                    </TableCell>
                  </TableRow>
                  
                  {dateBookings.length > 0 && dateBookings.map((booking: Booking) => (
                    <TableRow 
                      key={booking.id} 
                      className="bg-secondary/10 border-t border-dashed border-secondary"
                    >
                      <TableCell colSpan={3} className="py-3 px-6">
                        <div className="flex flex-col space-y-1">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-sm">{booking.school_name}</span>
                            <span className="text-xs text-muted-foreground">{booking.contact_name}</span>
                          </div>
                          
                          {booking.comments && (
                            <div className="text-xs text-muted-foreground mt-1">
                              <span className="font-medium">Σχόλια: </span>
                              {expandedComments[booking.id] ? (
                                <span>{booking.comments}</span>
                              ) : (
                                <span>
                                  {truncateText(booking.comments)}
                                  {booking.comments && booking.comments.length > 50 && (
                                    <button 
                                      onClick={() => toggleComment(booking.id)}
                                      className="ml-1 text-primary hover:underline focus:outline-none"
                                    >
                                      Περισσότερα
                                    </button>
                                  )}
                                </span>
                              )}
                              {expandedComments[booking.id] && booking.comments && booking.comments.length > 50 && (
                                <button 
                                  onClick={() => toggleComment(booking.id)}
                                  className="ml-1 text-primary hover:underline focus:outline-none"
                                >
                                  Λιγότερα
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <BookingDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedDate={selectedDate?.date || null}
        selectedDisplayDate={selectedDate ? getDisplayDate(selectedDate.date) : ''}
      />
    </>
  )
}