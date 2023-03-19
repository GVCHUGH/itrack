import { Component } from '@angular/core';

@Component({
  selector: 'app-view-retailer-list',
  templateUrl: './view-retailer-list.component.html',
  styleUrls: ['./view-retailer-list.component.scss']
})
export class ViewRetailerListComponent {
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }
}
