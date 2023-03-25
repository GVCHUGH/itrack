import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-wallet',
  templateUrl: './employee-wallet.component.html',
  styleUrls: ['./employee-wallet.component.scss']
})
export class EmployeeWalletComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
