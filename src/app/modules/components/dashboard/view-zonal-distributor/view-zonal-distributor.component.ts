import { Component } from '@angular/core';

@Component({
  selector: 'app-view-zonal-distributor',
  templateUrl: './view-zonal-distributor.component.html',
  styleUrls: ['./view-zonal-distributor.component.scss']
})
export class ViewZonalDistributorComponent {
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }
}
