import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { StatusCardComponent } from './status-card/status-card.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    StatusCardComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    StatusCardComponent,
    SlickCarouselModule,
    NotificationComponent,
    StatusCardComponent
  ]
})
export class SharedModule { }
