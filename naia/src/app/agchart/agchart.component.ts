import { Component, ViewChild } from "@angular/core";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { getData, getSeries } from "./data";

@Component({
  selector: 'app-agchart',
  templateUrl: './agchart.component.html',
  styleUrls: ['./agchart.component.scss']
})

export class AgchartComponent {
  public options: any;
  public rowData = [];
  constructor() {
    this.options = {
      title: {
        text: "Annual Fuel Expenditure",
      },
      data: getData(),
      series: getSeries(),
    };
  }
  // getChartData() {
  //   this.billingServiceService.getChartData().subscribe((data) => {
  //     console.log(data);
  //     this.rowData = data;
  //   })
  // }
  @ViewChild('chart') chart: any; // Reference to the chart DOM element

  // Method to generate PDF
  generatePDF() {
    html2canvas(this.chart.nativeElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      // Specify the width and height for the image
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); // Use width and height
      pdf.save('chart.pdf'); // Save the PDF
    });
  }
}
