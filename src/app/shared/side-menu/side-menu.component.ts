import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from 'src/app/core/constant';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  public menuItems:any = menu;
  public openDropdown:boolean = false;
  @Input() toggleValue!:boolean;
  @Output() expendMenu = new EventEmitter<any>();
  public openDropdowns:any[] = [];
  constructor(
    private router:Router
  ){
  }

  redirectTo(item:any, index?:any){
    debugger
    this.openDropdowns[index] = !this.openDropdowns[index];
    if(!item.hasDropdown){
      this.router.navigateByUrl(item.link);
    }else {
      this.expendMenu.emit();
    }
  }

}
