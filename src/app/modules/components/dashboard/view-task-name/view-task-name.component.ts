import { Component } from '@angular/core';

@Component({
  selector: 'app-view-task-name',
  templateUrl: './view-task-name.component.html',
  styleUrls: ['./view-task-name.component.scss']
})
export class ViewTaskNameComponent {
  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
