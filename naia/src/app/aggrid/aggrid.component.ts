import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
  ModuleRegistry
} from "@ag-grid-community/core";
// import "@ag-grid-community/styles/ag-grid.css";
// import "@ag-grid-community/styles/ag-theme-quartz.css";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { IOlympicData } from "./interfaces";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-aggrid',
 // standalone: true,
 // imports: [AgGridAngular, HttpClientModule],
  template: `<ag-grid-angular
    style="width: 100%; height: 100%;"
    [columnDefs]="columnDefs"
    [rowData]="rowData"
    [defaultColDef]="defaultColDef"
    [class]="themeClass"
    (gridReady)="onGridReady()"
  /> `,
})
export class AggridComponent {
  public columnDefs: any = [  // Specify type as (ColDef | ColGroupDef)[]
    { field: "athlete", minWidth: 170 },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
  
  public defaultColDef: any = {
    editable: true,
    filter: true,
  };
  
  public rowData: IOlympicData[] = [];  // Initialize as an empty array
  public themeClass: string = "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  onGridReady() {
    this.http.get<IOlympicData[]>("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe({
        next: (data) => {
          this.rowData = data;
        },
        error: (err) => {
          console.error('Error fetching data', err); // Error handling
        }
      });
  }
}
