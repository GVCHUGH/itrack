import { Component } from '@angular/core';

@Component({
  selector: 'app-view-expense-icons',
  templateUrl: './view-expense-icons.component.html',
  styleUrls: ['./view-expense-icons.component.scss']
})
export class ViewExpenseIconsComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
