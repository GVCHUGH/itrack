import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.scss']
})
export class ViewEmployeeListComponent {
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }
}
