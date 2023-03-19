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
import { SwitchCheckboxComponent } from './switch-checkbox/switch-checkbox.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    StatusCardComponent,
    NotificationComponent,
    XyChartComponent,
    PieChartComponent,
    SwitchCheckboxComponent
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
    AngularMaterialModule,
    SwitchCheckboxComponent
  ]
})
export class SharedModule { }
