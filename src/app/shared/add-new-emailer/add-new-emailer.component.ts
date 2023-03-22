import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-emailer',
  templateUrl: './add-new-emailer.component.html',
  styleUrls: ['./add-new-emailer.component.scss']
})
export class AddNewEmailerComponent {
  constructor(
    private matDialogRef:MatDialogRef<AddNewEmailerComponent>
  ){}

  ngOnInit(){
    this.matDialogRef.addPanelClass('add-new-template')
  }
}
