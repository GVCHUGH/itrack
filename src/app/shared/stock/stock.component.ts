import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {

  constructor(private dialog : MatDialog){}
  toClose(){
    this.dialog.closeAll();
  }
}
