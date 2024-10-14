import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
  ModuleRegistry
} from "@ag-grid-community/core";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { IOlympicData } from "./interfaces";
import { BillingServiceService } from "../service/billing-service.service";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-aggrid',
  templateUrl: 'aggrid.component.html',
})
export class AggridComponent {
  public columnDefs: any = [  // Specify type as (ColDef | ColGroupDef)[]
    { field: "patientName", minWidth: 170 },
    { field: "LastName" },
    { field: "TransactionDate" },
    { field: "PatientMRN" },
    { field: "Encounter" },
    { field: "DOB" },
  ];
  
  public defaultColDef: any = {
    editable: true,
    filter: true,
  };
  
  public rowData: IOlympicData[] = [];  // Initialize as an empty array
  public themeClass: string = "ag-theme-quartz";

  constructor(private http: HttpClient, private billingServiceService: BillingServiceService) {
    this.getLocalJsonDta('data.json')
  }

  onGridReady() {
    this.http.get<IOlympicData[]>("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe({
        next: (data) => {
          //this.rowData = data;
        },
        error: (err) => {
          console.error('Error fetching data', err); // Error handling
        }
      });
  }
  getLocalJsonDta(path:any) {
		this.billingServiceService
			.getList(path)
			.pipe()
			.subscribe((data) => {
				//this.stateList = data.content;
        console.log(data)
        this.rowData = data
			});

	}

  exportToExcel() {
    // Implement Excel export logic here
  }
}
