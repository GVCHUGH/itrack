import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewEmailerComponent } from 'src/app/shared/add-new-emailer/add-new-emailer.component';

@Component({
  selector: 'app-view-email-template',
  templateUrl: './view-email-template.component.html',
  styleUrls: ['./view-email-template.component.scss']
})
export class ViewEmailTemplateComponent {
  constructor(
    private matDialog:MatDialog
  ){

  }
  addNew() {
    this.matDialog.open(AddNewEmailerComponent);
  }
}
