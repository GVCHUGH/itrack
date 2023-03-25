import { Component } from '@angular/core';

@Component({
  selector: 'app-view-expense-type',
  templateUrl: './view-expense-type.component.html',
  styleUrls: ['./view-expense-type.component.scss']
})
export class ViewExpenseTypeComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}