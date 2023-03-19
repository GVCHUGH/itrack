import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddZonalDistributorComponent } from './add-zonal-distributor/add-zonal-distributor.component';
import {  ViewZonalDistributorListComponent } from './view-zonal-distributor-list/view-zonal-distributor-list.component';
import { UploadEmployeeComponent } from './upload-employee/upload-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { UploadZonalDistributorComponent } from './upload-zonal-distributor/upload-zonal-distributor.component';
import { AddAreaDistributorComponent } from './add-area-distributor/add-area-distributor.component';
import { UploadAreaDistributorComponent } from './upload-area-distributor/upload-area-distributor.component';
import { ViewAreaDistributorComponent } from './view-area-distributor/view-area-distributor.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { UploadRetailerComponent } from './upload-retailer/upload-retailer.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewRetailerListComponent } from './view-retailer-list/view-retailer-list.component';
import { ViewZonalDistributorComponent } from './view-zonal-distributor/view-zonal-distributor.component';
import { ViewRetailerComponent } from './view-retailer/view-retailer.component';
import { ViewAreaDistributorListComponent } from './view-area-distributor-list/view-area-distributor-list.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { AttendanceReportDrawerComponent } from './attendance-report-drawer/attendance-report-drawer.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddZonalDistributorComponent,
    ViewZonalDistributorListComponent,
    UploadEmployeeComponent,
    AddEmployeeComponent,
    ViewEmployeeListComponent,
    UploadZonalDistributorComponent,
    AddAreaDistributorComponent,
    UploadAreaDistributorComponent,
    ViewAreaDistributorComponent,
    AddRetailerComponent,
    UploadRetailerComponent,
    ViewRetailerListComponent,
    ViewEmployeeComponent,
    ViewZonalDistributorComponent,
    ViewRetailerComponent,
    ViewAreaDistributorListComponent,
    AttendanceReportComponent,
    AttendanceReportDrawerComponent
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
