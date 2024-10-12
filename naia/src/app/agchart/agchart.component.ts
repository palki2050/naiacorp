import { Component } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions, AgFlowProportionChartOptions } from "ag-charts-community";
import { getData } from "./data";

@Component({
  selector: 'app-agchart',
  templateUrl: './agchart.component.html',
  styleUrls: ['./agchart.component.scss']
})
export class AgchartComponent {
  public options: any;

  constructor() {
    this.options = {
      title: {
        text: "Annual Fuel Expenditure",
      },
      data: getData(),
      series: [
        { type: 'line', xKey: 'quarter', yKey: 'petrol', yName: 'Petrol' },
        { type: 'line', xKey: 'quarter', yKey: 'diesel', yName: 'Diesel' },
      ],
    };
  }
}
