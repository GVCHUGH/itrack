import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-linked-devices',
  templateUrl: './linked-devices.component.html',
  styleUrls: ['./linked-devices.component.scss']
})
export class LinkedDevicesComponent {

  constructor(private dialog : MatDialog){}
  toClose(){
    this.dialog.closeAll();
  }
}
