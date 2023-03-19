import { Component } from '@angular/core';

@Component({
  selector: 'app-view-zonal-distributor-list',
  templateUrl: './view-zonal-distributor-list.component.html',
  styleUrls: ['./view-zonal-distributor-list.component.scss']
})
export class ViewZonalDistributorListComponent {
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }
}
