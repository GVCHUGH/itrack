import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
