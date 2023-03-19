import { Component } from '@angular/core';

@Component({
  selector: 'app-view-area-distributor',
  templateUrl: './view-area-distributor.component.html',
  styleUrls: ['./view-area-distributor.component.scss']
})
export class ViewAreaDistributorComponent {
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }
}
