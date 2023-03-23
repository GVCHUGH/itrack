import { Component } from '@angular/core';

@Component({
  selector: 'app-product-wise-targets',
  templateUrl: './product-wise-targets.component.html',
  styleUrls: ['./product-wise-targets.component.scss']
})
export class ProductWiseTargetsComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
