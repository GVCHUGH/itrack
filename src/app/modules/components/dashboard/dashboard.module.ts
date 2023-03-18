import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddZonalDistributorComponent } from './add-zonal-distributor/add-zonal-distributor.component';
import { AngularMaterialModule } from 'src/app/core/models/angular-material/angular-material.module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddZonalDistributorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    AdminDashboardComponent,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
