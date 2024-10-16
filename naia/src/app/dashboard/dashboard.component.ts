import { Component, OnInit } from '@angular/core';
import { BillingServiceService } from '../service/billing-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedView: string = 'childOne';
  chartData: any;
  constructor(private billingService: BillingServiceService) { }

  ngOnInit() {
    this.billingService.selectedView$.subscribe(view => {
      this.selectedView = view;
    });
    this.billingService.getChartData().subscribe((data) => {
      this.chartData = data;
    })
  }
}
