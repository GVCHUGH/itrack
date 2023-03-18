import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddZonalDistributorComponent } from './add-zonal-distributor/add-zonal-distributor.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent},
  {path:'dashboard', component:AdminDashboardComponent},
  {path:'add-zonal-distributor', component:AddZonalDistributorComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
