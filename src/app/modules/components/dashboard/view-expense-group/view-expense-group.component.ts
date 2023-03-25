import { Component } from '@angular/core';

@Component({
  selector: 'app-view-expense-group',
  templateUrl: './view-expense-group.component.html',
  styleUrls: ['./view-expense-group.component.scss']
})
export class ViewExpenseGroupComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
