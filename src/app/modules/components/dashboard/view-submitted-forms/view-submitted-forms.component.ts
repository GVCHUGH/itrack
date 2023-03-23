import { Component } from '@angular/core';

@Component({
  selector: 'app-view-submitted-forms',
  templateUrl: './view-submitted-forms.component.html',
  styleUrls: ['./view-submitted-forms.component.scss']
})
export class ViewSubmittedFormsComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
