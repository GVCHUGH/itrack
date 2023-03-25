import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-app-user-dialog',
  templateUrl: './view-app-user-dialog.component.html',
  styleUrls: ['./view-app-user-dialog.component.scss']
})
export class ViewAppUserDialogComponent {
  constructor(
    private dialogRef:MatDialogRef<ViewAppUserDialogComponent>
  ){}

  ngOnInit(): void {
  this.dialogRef.addPanelClass('view-app-user-dialog');  
  }

  close() {
    this.dialogRef.close();
  }
}
