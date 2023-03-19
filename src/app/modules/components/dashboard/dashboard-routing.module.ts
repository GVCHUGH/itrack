import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAreaDistributorComponent } from './add-area-distributor/add-area-distributor.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddZonalDistributorComponent } from './add-zonal-distributor/add-zonal-distributor.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UploadAreaDistributorComponent } from './upload-area-distributor/upload-area-distributor.component';
import { UploadEmployeeComponent } from './upload-employee/upload-employee.component';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { UploadZonalDistributorComponent } from './upload-zonal-distributor/upload-zonal-distributor.component';
import { ViewAreaDistributorComponent } from './view-area-distributor/view-area-distributor.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { UploadRetailerComponent } from './upload-retailer/upload-retailer.component';
import { ViewRetailerListComponent } from './view-retailer-list/view-retailer-list.component';
import { ViewZonalDistributorListComponent } from './view-zonal-distributor-list/view-zonal-distributor-list.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewZonalDistributorComponent } from './view-zonal-distributor/view-zonal-distributor.component';
import { ViewRetailerComponent } from './view-retailer/view-retailer.component';
import { ViewAreaDistributorListComponent } from './view-area-distributor-list/view-area-distributor-list.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';

const routes: Routes = [
  {path:'dashboard', component:AdminDashboardComponent},

  {path:'add-zonal-distributor', component:AddZonalDistributorComponent},
  {path:'view-zonal-distributor-list', component:ViewZonalDistributorListComponent},
  {path:'upload-zonal-distributor', component:UploadZonalDistributorComponent},
  {path:'view-zonal-distributor', component:ViewZonalDistributorComponent},

  {path:'add-employee', component:AddEmployeeComponent},
  {path:'upload-employee', component:UploadEmployeeComponent},
  {path:'view-employee-list', component:ViewEmployeeListComponent},
  {path:'view-employee', component:ViewEmployeeComponent},

  {path:'add-area-distributor', component:AddAreaDistributorComponent},
  {path:'upload-area-distributor', component:UploadAreaDistributorComponent},
  {path:'view-area-distributor', component:ViewAreaDistributorComponent},
  {path:'view-area-distributor-list', component:ViewAreaDistributorListComponent},

  {path:'add-retailer', component:AddRetailerComponent},
  {path:'upload-retailer', component:UploadRetailerComponent},
  {path:'view-retailer-list', component:ViewRetailerListComponent},
  {path:'view-retailer', component:ViewRetailerComponent},

  {path:'attendance-report', component:AttendanceReportComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
