import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-area-distributor-list',
  templateUrl: './view-area-distributor-list.component.html',
  styleUrls: ['./view-area-distributor-list.component.scss']
})
export class ViewAreaDistributorListComponent {
  constructor(private router: Router){}
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }

  goViewEmployee(){
    this.router.navigateByUrl('view-area-distributor');
  }
}
