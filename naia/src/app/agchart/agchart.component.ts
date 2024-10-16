import { Component, Input, OnInit } from "@angular/core";
import { getData } from "./data";

@Component({
  selector: 'app-agchart',
  templateUrl: './agchart.component.html',
  styleUrls: ['./agchart.component.scss']
})

export class AgchartComponent implements OnInit {
  @Input() chartData: any;
  public options: any;
  constructor() {

  }

  ngOnInit(): void {
    this.options = {
      title: {
        text: "Annual Hospital Expenditure",
      },
      data: getData(),
      series: this.chartData,
    };
  }
}
