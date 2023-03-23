import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-retailer-list',
  templateUrl: './view-retailer-list.component.html',
  styleUrls: ['./view-retailer-list.component.scss']
})
export class ViewRetailerListComponent {
  constructor(private router: Router){}
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }

  goViewEmployee(){
    this.router.navigateByUrl('view-retailer');
  }

  hideValue:boolean = true;
  showHide(){
    this.hideValue = !this.hideValue;
  }
}
