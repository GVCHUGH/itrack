import { Component } from '@angular/core';

@Component({
  selector: 'app-view-retailer',
  templateUrl: './view-retailer.component.html',
  styleUrls: ['./view-retailer.component.scss']
})
export class ViewRetailerComponent {
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }

  ngOnInit(){
    window.scrollTo(0,0);
  }
}
