'use client'

import { useState } from 'react'
import { BookingTable } from '@/components/booking-table'
import { InstructionsDialog } from '@/components/instructions-dialog'
import { Button } from '@/components/ui/button'

type EventDate = {
  date: string
  displayDate: string
  count: number
}

interface PageClientProps {
  initialEventDates: EventDate[]
}

export function PageClient({ initialEventDates }: PageClientProps) {
  const [instructionsOpen, setInstructionsOpen] = useState(false)

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Header Section */}
      <header className="border-b border-border bg-background flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left logo (University) */}
            <img 
              src="https://www.geol.uoa.gr/typo3conf/ext/uoa_website/Resources/Public/Images/footer_logo.png" 
              alt="Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών" 
              className="h-6 sm:h-8 object-contain flex-shrink-0" 
            />
            
            {/* Center content */}
            <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-foreground whitespace-nowrap">
                Open Week
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                2-6 Φεβρουαρίου 2026
              </p>
            </div>
            
            {/* Right logo (Geology) */}
            <img 
              src="https://www.geol.uoa.gr/fileadmin/uploads/tx_gridelements/logo_geol_01.png" 
              alt="Τμήμα Γεωλογίας και Γεωπεριβάλλοντος" 
              className="h-6 sm:h-8 object-contain flex-shrink-0" 
            />
          </div>
          
          {/* Instructions button below header */}
          <div className="flex justify-center mt-2">
            <Button
              onClick={() => setInstructionsOpen(true)}
              size="sm"
              className="text-xs h-7 px-4 bg-black text-white hover:bg-gray-800"
            >
              Οδηγίες
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="space-y-2 sm:space-y-3">
            {/* Introduction */}
            <div className="text-center space-y-1">
              <h2 className="text-base sm:text-lg font-semibold">
                Επιλέξτε Ημερομηνία
              </h2>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                Παρακαλούμε επιλέξτε μία από τις διαθέσιμες ημερομηνίες για το σχολείο σας.
                Κάθε ημερομηνία έχει περιορισμένες θέσεις για σχολεία. Κάθε συνεδρία μπορεί να φιλοξενήσει μέχρι 60 μαθητές.
              </p>
            </div>

            {/* Table Section */}
            <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden min-h-0">
              <BookingTable initialEventDates={initialEventDates} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="border-t border-border bg-background flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground">
              Email: <a href="mailto:geology4all@geol.uoa.gr" className="hover:underline">geology4all@geol.uoa.gr</a>
            </p>
            <p className="text-[10px] text-muted-foreground mt-1">
              Copyright © 2025 Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών, Τμήμα Γεωλογίας και Γεωπεριβάλλοντος
            </p>
          </div>
        </div>
      </footer>

      {/* Instructions Dialog */}
      <InstructionsDialog
        open={instructionsOpen}
        onOpenChange={setInstructionsOpen}
      />
    </div>
  )
}
