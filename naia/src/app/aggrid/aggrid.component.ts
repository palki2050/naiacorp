import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
  ModuleRegistry
} from "@ag-grid-community/core";
import { Component } from "@angular/core";
import { hospitalData } from "./interfaces";
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
    { field: "transactionDate" },
    { field: "PatientMRN" },
    { field: "Encounter" },
    { field: "DOB" },
  ];
  
  public defaultColDef: any = {
    editable: true,
    filter: true,
  };
  public rowData: hospitalData[] = [];  // Initialize as an empty array
  public themeClass: string = "ag-theme-quartz";

  constructor( private billingServiceService: BillingServiceService) {
  }
  getGridData() {
    this.billingServiceService.getGridData().subscribe((data) => {
      console.log(data);
      this.rowData = data;
    })
  }
}
