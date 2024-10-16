import { Component } from '@angular/core';
import { BillingServiceService } from '../service/billing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedView: string = 'childOne';
  constructor(private billingService: BillingServiceService){}
  onSelect(view: string) {
    this.billingService.changeView(view);
    this.selectedView = view;
  }
}
