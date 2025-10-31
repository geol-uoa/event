
'use client'

import { useState } from 'react'
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

interface BookingTableProps {
  initialEventDates: EventDate[]
}

export function BookingTable({ initialEventDates }: BookingTableProps) {
  const [eventDates] = useState<EventDate[]>(initialEventDates)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<EventDate | null>(null)

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
            {eventDates.map((event) => {
              const isFull = event.count >= 60
              return (
                <TableRow
                  key={event.date}
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
