import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'naia';
  isCollapsed = false
}
