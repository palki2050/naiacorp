import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {

  constructor(private http: HttpClient) { }
  private transactions: Transaction[] = [
    { patientName: 'John Doe', transactionDate: '2023-10-01', amount: 150, location: 'Branch A' },
    { patientName: 'Jane Smith', transactionDate: '2023-10-02', amount: 200, location: 'Branch B' },
    // Add more mock data...
  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }
  getList(fileName:any): Observable<any> {
		return this.http.get(`assets/`+ `${fileName}`);
	}
}
