import { Component, ViewChild, OnInit, Input } from "@angular/core";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { getData, getSeries } from "./data";
import { BillingServiceService } from "../service/billing-service.service";

@Component({
  selector: 'app-agchart',
  templateUrl: './agchart.component.html',
  styleUrls: ['./agchart.component.scss']
})

export class AgchartComponent implements OnInit {
  @Input() chartData :any;
  public options: any;
  constructor() {
    this.options = {
      title: {
        text: "Annual Hospital Expenditure",
      },
      data: getData(),
      series: getSeries(),
    };
  }

  ngOnInit(): void {

  }
}
