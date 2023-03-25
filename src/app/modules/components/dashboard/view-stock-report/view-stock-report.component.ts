import { Component } from '@angular/core';

@Component({
  selector: 'app-view-stock-report',
  templateUrl: './view-stock-report.component.html',
  styleUrls: ['./view-stock-report.component.scss']
})
export class ViewStockReportComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
