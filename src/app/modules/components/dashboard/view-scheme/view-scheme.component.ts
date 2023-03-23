import { Component } from '@angular/core';

@Component({
  selector: 'app-view-scheme',
  templateUrl: './view-scheme.component.html',
  styleUrls: ['./view-scheme.component.scss']
})
export class ViewSchemeComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
