import { Component } from '@angular/core';

@Component({
  selector: 'app-view-leave-category',
  templateUrl: './view-leave-category.component.html',
  styleUrls: ['./view-leave-category.component.scss']
})
export class ViewLeaveCategoryComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
