import { Component } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions, AgFlowProportionChartOptions } from "ag-charts-community";
import { getData, getSeries } from "./data";
import { BillingServiceService } from "../service/billing-service.service";

@Component({
  selector: 'app-agchart',
  templateUrl: './agchart.component.html',
  styleUrls: ['./agchart.component.scss']
})
export class AgchartComponent {
  public options: any;
rowData = [];
  constructor(private billingServiceService: BillingServiceService) {
    this.options = {
      title: {
        text: "Annual Fuel Expenditure",
      },
      data: getData(),
      series: getSeries(),
    };
  }
  // getLocalJsonDta(path:any) {
	// 	this.billingServiceService
	// 		.getList(path)
	// 		.pipe()
	// 		.subscribe((data) => {
	// 			//this.stateList = data.content;
  //       console.log(data)
  //       this.rowData = data;
  //       this.options.series = this.rowData
	// 		});

	// }
}
