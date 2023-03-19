import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddZonalDistributorComponent } from './add-zonal-distributor/add-zonal-distributor.component';
import { ViewZonalDistributorComponent } from './view-zonal-distributor/view-zonal-distributor.component';
import { UploadEmployeeComponent } from './upload-employee/upload-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UploadZonalDistributorComponent } from './upload-zonal-distributor/upload-zonal-distributor.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddZonalDistributorComponent,
    ViewZonalDistributorComponent,
    UploadEmployeeComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    UploadZonalDistributorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AdminDashboardComponent,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
