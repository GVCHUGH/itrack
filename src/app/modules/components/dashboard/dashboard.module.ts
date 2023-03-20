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
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { ViewRegionComponent } from './view-region/view-region.component';
import { UploadTargetsComponent } from './upload-targets/upload-targets.component';
import { AddTargetsComponent } from './add-targets/add-targets.component';
import { ViewTargetsComponent } from './view-targets/view-targets.component';
import { AddDefaultTargetsComponent } from './add-default-targets/add-default-targets.component';
import { TargetPerformanceReportComponent } from './target-performance-report/target-performance-report.component';
import { UploadBranchComponent } from './upload-branch/upload-branch.component';
import { UploadRegionComponent } from './upload-region/upload-region.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { ViewAreaComponent } from './view-area/view-area.component';
import { UploadAreaComponent } from './upload-area/upload-area.component';
import { ProductWiseTargetsComponent } from './product-wise-targets/product-wise-targets.component';
import { DealerWiseTargetsComponent } from './dealer-wise-targets/dealer-wise-targets.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ViewFormsComponent } from './view-forms/view-forms.component';
import { ViewSubmittedFormsComponent } from './view-submitted-forms/view-submitted-forms.component';



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
    AttendanceReportDrawerComponent,
    AddBranchComponent,
    AddRegionComponent,
    ViewBranchComponent,
    ViewRegionComponent,
    UploadTargetsComponent,
    AddTargetsComponent,
    ViewTargetsComponent,
    AddDefaultTargetsComponent,
    TargetPerformanceReportComponent,
    UploadBranchComponent,
    UploadRegionComponent,
    AddAreaComponent,
    ViewAreaComponent,
    UploadAreaComponent,
    ProductWiseTargetsComponent,
    DealerWiseTargetsComponent,
    CreateFormComponent,
    ViewFormsComponent,
    ViewSubmittedFormsComponent,
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
