import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent {
  constructor(private router: Router){}
  public contentView:any='l';
  changeView(view:any){
    this.contentView = view;
  }
}
