import { Component } from '@angular/core';

@Component({
  selector: 'app-book-expenses',
  templateUrl: './book-expenses.component.html',
  styleUrls: ['./book-expenses.component.scss']
})
export class BookExpensesComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
