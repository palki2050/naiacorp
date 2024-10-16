import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {
private gridurl = 'http://localhost:3000/griddata';
private charturl = 'http://localhost:3000/charts';
  constructor(private http: HttpClient) { }
  // private transactions: Transaction[] = [
  //   { patientName: 'John Doe', transactionDate: '2023-10-01', amount: 150, location: 'Branch A' },
  //   { patientName: 'Jane Smith', transactionDate: '2023-10-02', amount: 200, location: 'Branch B' },
  //   // Add more mock data...
  // ];

  // getTransactions(): Observable<Transaction[]> {
  //   return of(this.transactions);
  // }
  // getList(fileName:any): Observable<any> {
	// 	return this.http.get(`assets/`+ `${fileName}`);
	// }

  getGridData(): Observable<any> {
    return this.http.get(this.gridurl);
  }
  getChartData(): Observable<any> {
    return this.http.get(this.charturl);
  }
  private selectedViewSource = new BehaviorSubject<string>('childOne');
  selectedView$ = this.selectedViewSource.asObservable();

  changeView(view: string) {
    this.selectedViewSource.next(view);
  }
}
