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
            Οι επισκέψεις Σχολείων στο Τμήμα Γεωλογίας και Γεωπεριβάλλοντος του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών (ΕΚΠΑ) θα πραγματοποιηθούν στο χρονικό διάστημα από 02/02/26 - 06/02/26.
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
            .
          </p>

          <p>
            Παρακαλούμε στην σχετική φόρμα στο πεδίο σχόλια να αναγράφεται και ο αριθμός των μαθητών.
          </p>

          <p className="pt-2">
            Είμαστε στη διάθεση σας για κάθε διευκρίνιση στην ηλεκτρονική διεύθυνση{" "}
            <a 
              href="mailto:geology4all@geol.uoa.gr"
              className="text-blue-600 hover:underline font-medium"
            >
              geology4all@geol.uoa.gr
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
