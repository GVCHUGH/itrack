import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-zonal-distributor-list',
  templateUrl: './view-zonal-distributor-list.component.html',
  styleUrls: ['./view-zonal-distributor-list.component.scss']
})
export class ViewZonalDistributorListComponent {
  constructor(private router: Router){}
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }

  goViewEmployee(){
    this.router.navigateByUrl('view-zonal-distributor');
  }

  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
