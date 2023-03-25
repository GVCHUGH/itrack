import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewAppUserDialogComponent } from '../view-app-user-dialog/view-app-user-dialog.component';

@Component({
  selector: 'app-view-app-users',
  templateUrl: './view-app-users.component.html',
  styleUrls: ['./view-app-users.component.scss']
})
export class ViewAppUsersComponent {
  hideValue:boolean = true;
  constructor(
    private matDialog:MatDialog
  ){

  }
  showHide(){
    this.hideValue = !this.hideValue;
  }

  viewUser() {
    this.matDialog.open(ViewAppUserDialogComponent);
  }
}
