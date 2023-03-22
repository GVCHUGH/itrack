import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-connected-dealer',
  templateUrl: './connected-dealer.component.html',
  styleUrls: ['./connected-dealer.component.scss']
})
export class ConnectedDealerComponent {

  constructor(private dialog : MatDialog){}
  toClose(){
    this.dialog.closeAll();
  }
}