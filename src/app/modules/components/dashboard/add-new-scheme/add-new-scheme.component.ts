import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-scheme',
  templateUrl: './add-new-scheme.component.html',
  styleUrls: ['./add-new-scheme.component.scss']
})
export class AddNewSchemeComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
