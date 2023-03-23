import { Component } from '@angular/core';

@Component({
  selector: 'app-view-region',
  templateUrl: './view-region.component.html',
  styleUrls: ['./view-region.component.scss']
})
export class ViewRegionComponent {

  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
