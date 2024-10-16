
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../models/transaction.model';
import { BillingServiceService } from '../service/billing-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  filterForm: FormGroup;
  public transactions: Transaction[] = [];
  public selectedTransactions: Transaction[] = [];
  public chartData: any[] = [];

  constructor(private fb: FormBuilder, private billingService: BillingServiceService) {
    this.filterForm = this.fb.group({
      timeFrame: ['year-to-date', Validators.required],
      dateRange: [null, Validators.required],
      locations: [[], Validators.required]
    });
  }
  ngOnInit(): void {
    this.loadTransactions();

  }

  loadTransactions() {
    this.billingService.getGridData().subscribe((data: any) => {
      this.transactions = data;
      this.filterTransactions();
    });
  }
  onSubmit() {
    if (this.filterForm.valid) {
      console.log('Form Submitted', this.filterForm.value);
    } else {
      this.filterForm.markAllAsTouched(); // Mark all controls as touched
    }
  }
  filterTransactions() {
    // Implement filtering logic based on form values
    const { timeFrame, locations, dateRange } = this.filterForm.value;

    // Example filter logic:
    this.selectedTransactions = this.transactions.filter(transaction => {
      const date: any = moment(transaction.transactionDate);
      const isInDateRange = dateRange ? (date.isBetween(dateRange[0], dateRange[1], null, '[]')) : true;
      const isInLocation = locations.length ? locations.includes(transaction.location) : true;

      // Additional logic based on time frame can be added here

      return isInDateRange && isInLocation;
    });

    this.updateChartData();
  }

  updateChartData() {
    // Update chartData based on selected transactions
  }

  onFilterChange() {
    this.filterTransactions();
  }

}
function moment(transactionDate: string) {
  throw new Error('Function not implemented.');
}

