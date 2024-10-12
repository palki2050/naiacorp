import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isCollapsed = false;
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
}
