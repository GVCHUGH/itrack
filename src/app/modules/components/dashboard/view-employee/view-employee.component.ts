import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent {
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }

  ngOnInit(){
    window.scrollTo(0,0);
  }
}
