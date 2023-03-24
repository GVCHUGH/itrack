import { Component } from '@angular/core';

@Component({
  selector: 'app-view-visit-purpose-category',
  templateUrl: './view-visit-purpose-category.component.html',
  styleUrls: ['./view-visit-purpose-category.component.scss']
})
export class ViewVisitPurposeCategoryComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
