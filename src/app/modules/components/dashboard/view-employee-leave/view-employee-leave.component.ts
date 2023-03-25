import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee-leave',
  templateUrl: './view-employee-leave.component.html',
  styleUrls: ['./view-employee-leave.component.scss']
})
export class ViewEmployeeLeaveComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
