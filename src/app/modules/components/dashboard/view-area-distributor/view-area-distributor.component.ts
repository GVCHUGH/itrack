import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-area-distributor',
  templateUrl: './view-area-distributor.component.html',
  styleUrls: ['./view-area-distributor.component.scss']
})
export class ViewAreaDistributorComponent {

  constructor(private router: Router){}
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }

  goViewEmployee(){
    this.router.navigateByUrl('view-employee');
  }
}
