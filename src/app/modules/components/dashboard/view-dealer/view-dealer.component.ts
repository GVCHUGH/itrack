import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectedDealerComponent } from 'src/app/shared/connected-dealer/connected-dealer.component';
import { LinkedDevicesComponent } from 'src/app/shared/linked-devices/linked-devices.component';
import { LoginDetailComponent } from 'src/app/shared/login-detail/login-detail.component';
import { NotificationComponent } from 'src/app/shared/notification/notification.component';
import { StockComponent } from 'src/app/shared/stock/stock.component';

@Component({
  selector: 'app-view-dealer',
  templateUrl: './view-dealer.component.html',
  styleUrls: ['./view-dealer.component.scss']
})
export class ViewDealerComponent {

  constructor(public dialogRef: MatDialog){
  }


  showStock(): void{
    this.dialogRef.open(StockComponent);
  }

  showLinkDevice(){
    this.dialogRef.open(LinkedDevicesComponent);
  }

  showLogin(){
    this.dialogRef.open(LoginDetailComponent);
  }

  showDealer(){
    this.dialogRef.open(ConnectedDealerComponent);
  }

  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
