import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddZonalDistributorComponent } from './add-zonal-distributor/add-zonal-distributor.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UploadEmployeeComponent } from './upload-employee/upload-employee.component';
import { ViewEmployeeListComponent } from './view-employee/view-employee-list.component';
import { ViewZonalDistributorComponent } from './view-zonal-distributor/view-zonal-distributor.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent},
  {path:'dashboard', component:AdminDashboardComponent},
  {path:'add-zonal-distributor', component:AddZonalDistributorComponent},
  {path:'view-zonal-distributor', component:ViewZonalDistributorComponent},
  {path:'upload-employee', component:UploadEmployeeComponent},
  {path:'add-employee', component:AddEmployeeComponent},
  {path:'view-employee-list', component:ViewEmployeeListComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
