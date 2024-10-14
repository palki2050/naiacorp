import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}
