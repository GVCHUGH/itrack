import { Component } from '@angular/core';

@Component({
  selector: 'app-view-extra-expenses-category',
  templateUrl: './view-extra-expenses-category.component.html',
  styleUrls: ['./view-extra-expenses-category.component.scss']
})
export class ViewExtraExpensesCategoryComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
