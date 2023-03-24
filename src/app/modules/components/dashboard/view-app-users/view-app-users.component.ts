import { Component } from '@angular/core';

@Component({
  selector: 'app-view-app-users',
  templateUrl: './view-app-users.component.html',
  styleUrls: ['./view-app-users.component.scss']
})
export class ViewAppUsersComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
