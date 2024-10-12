import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';

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
  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}
