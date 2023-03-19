import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { StatusCardComponent } from './status-card/status-card.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NotificationComponent } from './notification/notification.component';
import { XyChartComponent } from './xy-chart/xy-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AngularMaterialModule } from '../core/models/angular-material/angular-material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    StatusCardComponent,
    NotificationComponent,
    XyChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    StatusCardComponent,
    SlickCarouselModule,
    NotificationComponent,
    StatusCardComponent,
    XyChartComponent,
    PieChartComponent,
    AngularMaterialModule
  ]
})
export class SharedModule { }
