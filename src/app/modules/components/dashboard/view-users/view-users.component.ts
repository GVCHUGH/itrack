import { Component } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
