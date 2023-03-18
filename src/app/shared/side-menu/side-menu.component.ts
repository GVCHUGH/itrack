import { Component } from '@angular/core';
import { menu } from 'src/app/core/constant';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  public menuItems:any = menu;

}
