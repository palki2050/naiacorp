export interface Transaction {
    patientName: string;     // Name of the patient
    transactionDate: string; // Date of the transaction (format: 'YYYY-MM-DD')
    amount: number;          // Amount of the transaction
    location: string;        // Location of the hospital branch
  }