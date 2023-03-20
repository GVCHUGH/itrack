import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.scss']
})
export class ViewEmployeeListComponent {
  constructor(private router: Router){}
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }

  goViewEmployee(){
    this.router.navigateByUrl('view-employee');
  }
}
