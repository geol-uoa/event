import { supabase } from '@/lib/supabase'
import { BookingTable } from '@/components/booking-table'

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

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Header Section */}
      <header className="border-b border-border bg-background flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center">
            <div className="space-y-0.5">
              <h1 className="text-lg sm:text-xl font-bold text-foreground">
                Open Week
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                2-6 Φεβρουαρίου 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="space-y-4 sm:space-y-5">
            {/* Introduction */}
            <div className="text-center space-y-1.5">
              <h2 className="text-lg sm:text-xl font-semibold">
                Επιλέξτε Ημερομηνία
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Παρακαλούμε επιλέξτε μία από τις διαθέσιμες ημερομηνίες για το σχολείο σας.
                Κάθε ημερομηνία έχει περιορισμένες θέσεις (μέγιστο 60 μαθητές ανά σχολείο-συνεδρία).
              </p>
            </div>

            {/* Table Section */}
            <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
              <BookingTable initialEventDates={eventDates} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="border-t border-border bg-background flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            {/* Left logo (University) */}
            <img 
              src="https://www.geol.uoa.gr/typo3conf/ext/uoa_website/Resources/Public/Images/footer_logo.png" 
              alt="Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών" 
              className="h-8 object-contain mx-auto sm:mx-0" 
            />
            
            {/* Center text */}
            <div className="text-center my-2 sm:my-0">
              <p className="text-xs font-medium">
                Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
              </p>
              <p className="text-xs text-muted-foreground">
                Τμήμα Γεωλογίας και Γεωπεριβάλλοντος
              </p>
              <p className="text-[10px] text-muted-foreground">
                Email: contact@geol.uoa.gr
              </p>
              <p className="text-[10px] text-muted-foreground mt-1">
                Copyright © 2025 Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
              </p>
            </div>
            
            {/* Right logo (Geology) */}
            <img 
              src="https://www.geol.uoa.gr/fileadmin/uploads/tx_gridelements/logo_geol_01.png" 
              alt="Τμήμα Γεωλογίας και Γεωπεριβάλλοντος" 
              className="h-8 object-contain mx-auto sm:mx-0 order-first sm:order-last" 
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

