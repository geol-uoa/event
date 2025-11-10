"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface InstructionsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function InstructionsDialog({
  open,
  onOpenChange,
}: InstructionsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="mx-4 max-w-[min(700px,calc(100vw-2rem))] rounded-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader className="space-y-2 pb-2">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Οδηγίες
          </DialogTitle>
          <DialogDescription className="text-sm">
            Επισκέψεις Σχολείων στο Τμήμα Γεωλογίας και Γεωπεριβάλλοντος
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <h3 className="font-bold text-base">
            Επισκέψεις Σχολείων στο Τμήμα Γεωλογίας και Γεωπεριβάλλοντος του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών για το ακαδημαϊκό έτος 2025-2026
          </h3>

          <p>
            Οι επισκέψεις Σχολείων στο Τμήμα Γεωλογίας και Γεωπεριβάλλοντος του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών (ΕΚΠΑ) θα πραγματοποιηθούν τις εργάσιμες ημέρες που περιλαμβάνονται στο χρονικό διαστήματος 02/02/26 - 06/02/26.
          </p>

          <p>
            Η διάρκεια της επίσκεψης είναι 3 ώρες και 30 λεπτά και ξεκινάει περίπου στις 9:00πμ, ανάλογα με τη χρονική δυνατότητα προσέλευσης του κάθε Σχολείου.
          </p>

          <p>
            Στους μαθητές που θα επισκεφτούν το Τμήμα θα δοθεί η δυνατότητα να διδαχθούν και να πραγματοποιήσουν οι ίδιοι εργαστηριακές ασκήσεις στα Εργαστήρια Σεισμολογίας, Κλιματολογίας, Γεωχημείας, Φυσικών καταστροφών και Παλαιοντολογίας, με επιβλέποντες διδάκτορες του Τμήματος, και θα ενημερωθούν για τις τελευταίες ερευνητικές εξελίξεις στις Γεωεπιστήμες. Επιπροσθέτως, θα γνωρίσουν τις επιστημονικές κατευθύνσεις που υποστηρίζει και προσφέρει το Τμήμα Γεωλογίας και Γεωπεριβάλλοντος του ΕΚΠΑ στους φοιτητές του καθώς και τις πολλές και εξαιρετικά ενδιαφέρουσες επαγγελματικές προοπτικές που ανοίγονται για τους αποφοίτους του.
          </p>

          <p>
            Οι εκπρόσωποι των Σχολείων που επιθυμούν να επισκεφτούν το Τμήμα Γεωλογίας και Γεωπεριβάλλοντος του ΕΚΠΑ, θα πρέπει να συμπληρώσουν τη φόρμα στο παρακάτω σύνδεσμο{" "}
            <a 
              href="https://www.geol-uoa.duckdns.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              https://www.geol-uoa.duckdns.org/
            </a>
            {" "}ή να στείλουν email στην ηλεκτρονική διεύθυνση{" "}
            <a 
              href="mailto:schools4geology@geol.uoa.gr"
              className="text-blue-600 hover:underline font-medium"
            >
              schools4geology@geol.uoa.gr
            </a>
            {" "}στο οποίο θα πρέπει να αναφέρουν τα ακόλουθα:
          </p>

          <div className="pl-4 space-y-2">
            <p>
              <span className="font-semibold">(1)</span> Τίτλος: Αίτημα για επίσκεψη της «ΤΑΞΗ ΠΟΥ ΘΑ ΕΠΙΣΚΕΦΘΕΙ ΤΟ ΤΜΗΜΑ ΓΕΩΛΟΓΙΑΣ ΚΑΙ ΓΕΩΠΕΡΙΒΑΛΛΟΝΤΟΣ» του «ΟΝΟΜΑ ΣΧΟΛΕΙΟΥ» στο Τμήμα Γεωλογίας και Γεωπεριβάλλοντος του ΕΚΠΑ
            </p>
            <p>
              <span className="font-semibold">(2)</span> Αναμενόμενος αριθμός μαθητών του Σχολείου που θα συμμετάσχουν στην εκδρομή
            </p>
            <p>
              <span className="font-semibold">(3)</span> Ημέρα που επιθυμεί το Σχολείο να επισκεφθεί το Τμήμα Γεωλογίας και Γεωπεριβάλλοντος, εντός των χρονικών διαστημάτων 02/02/26 - 06/02/26.
            </p>
            <p>
              <span className="font-semibold">(4)</span> Ονοματεπώνυμο, email και τηλέφωνο επικοινωνίας του/της υπεύθυνου/-ης Καθηγητή/-τριας του Σχολείου με τον/την οποίο/-α θα επικοινωνούν οι υπεύθυνοι του Τμήματος Τμήμα Γεωλογίας και Γεωπεριβάλλοντος για την οργάνωση της επίσκεψης
            </p>
          </div>

          <p className="pt-2">
            Είμαστε στη διάθεση σας για κάθε διευκρίνιση στην ηλεκτρονική διεύθυνση{" "}
            <a 
              href="mailto:schools4geology@geol.uoa.gr"
              className="text-blue-600 hover:underline font-medium"
            >
              schools4geology@geol.uoa.gr
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
