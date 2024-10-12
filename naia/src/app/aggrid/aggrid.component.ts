import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.scss']
})
export class AggridComponent {
  themeClass =
  "ag-theme-quartz";

// Row Data: The data to be displayed.
rowData: IRow[] = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Mercedes", model: "EQA", price: 48890, electric: true },
  { make: "Fiat", model: "500", price: 15774, electric: false },
  { make: "Nissan", model: "Juke", price: 20675, electric: false },
];

// Column Definitions: Defines & controls grid columns.
colDefs: ColDef<IRow>[] = [
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" },
];

defaultColDef: ColDef = {
  flex: 1,
};
}
