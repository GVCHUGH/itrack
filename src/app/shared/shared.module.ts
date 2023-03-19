import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { StatusCardComponent } from './status-card/status-card.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NotificationComponent } from './notification/notification.component';
import { XyChartComponent } from './xy-chart/xy-chart.component';
import { XYChart } from '@amcharts/amcharts5/xy';
import { PieChartComponent } from './pie-chart/pie-chart.component';


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
    SlickCarouselModule
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
    PieChartComponent
  ]
})
export class SharedModule { }
