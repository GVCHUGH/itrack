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
import { DealerWiseTargetsComponent } from './dealer-wise-targets/dealer-wise-targets.component';
import { ProductWiseTargetsComponent } from './product-wise-targets/product-wise-targets.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ViewFormsComponent } from './view-forms/view-forms.component';
import { ViewSubmittedFormsComponent } from './view-submitted-forms/view-submitted-forms.component';
import { SettingsComponent } from './settings/settings.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddVisitPurposeCategoryComponent } from './add-visit-purpose-category/add-visit-purpose-category.component';
import { AddExtraExpensesCategoryComponent } from './add-extra-expenses-category/add-extra-expenses-category.component';
import { BuildAttendanceSiteComponent } from './build-attendance-site/build-attendance-site.component';
import { UploadSalesComponent } from './upload-sales/upload-sales.component';
import { PreBookingConfigurationComponent } from './pre-booking-configuration/pre-booking-configuration.component';
import { VisitsComponent } from './visits/visits.component';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';
import { ViewEmailTemplateComponent } from './view-email-template/view-email-template.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UploadProductComponent } from './upload-product/upload-product.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddNewSchemeComponent } from './add-new-scheme/add-new-scheme.component';
import { ViewSchemeComponent } from './view-scheme/view-scheme.component';
import { ViewAppUsersComponent } from './view-app-users/view-app-users.component';
import { BuildTeamComponent } from './build-team/build-team.component';
import { ViewVisitPurposeCategoryComponent } from './view-visit-purpose-category/view-visit-purpose-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { ViewExtraExpensesCategoryComponent } from './view-extra-expenses-category/view-extra-expenses-category.component';
import { AddTaskNameComponent } from './add-task-name/add-task-name.component';
import { ViewTaskNameComponent } from './view-task-name/view-task-name.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent},
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

  {path:'attendance-report', component:AttendanceReportComponent},

  {path:'add-branch', component:AddBranchComponent},
  {path:'view-branch', component:ViewBranchComponent},
  {path:'upload-branch', component:UploadBranchComponent},

  {path:'add-region', component:AddRegionComponent},
  {path:'view-region', component:ViewRegionComponent},
  {path:'upload-region', component:UploadRegionComponent},


  {path:'add-area', component:AddAreaComponent},
  {path:'view-area', component:ViewAreaComponent},
  {path:'upload-area', component:UploadAreaComponent},
  
  {path:'add-product', component:AddProductComponent},
  {path:'view-product', component:ViewProductComponent},
  {path:'upload-product', component:UploadProductComponent},

  {path:'create-form', component:CreateFormComponent},
  {path:'view-forms', component:ViewFormsComponent},
  {path:'view-submitted-forms', component:ViewSubmittedFormsComponent},

  {path:'upload-targets', component:UploadTargetsComponent},
  {path:'add-targets', component:AddTargetsComponent},
  {path:'view-targets', component:ViewTargetsComponent},
  {path:'add-default-targets', component:AddDefaultTargetsComponent},
  {path:'target-performance-report', component:TargetPerformanceReportComponent},
  {path:'dealer-wise-targets', component:DealerWiseTargetsComponent},
  {path:'product-wise-targets', component:ProductWiseTargetsComponent},

  {path:'settings', component:SettingsComponent},

  {path:'add-category', component:AddCategoryComponent},
  {path:'add-extra-expenses-category', component:AddExtraExpensesCategoryComponent},
  {path:'build-attendance-site', component: BuildAttendanceSiteComponent},
  
  {path:'upload-sales', component: UploadSalesComponent},
  {path:'pre-booking-configuration', component: PreBookingConfigurationComponent},
  {path:'visits', component: VisitsComponent},

  {path:'view-dealer', component:ViewDealerComponent},

  {path:'view-email-template', component:ViewEmailTemplateComponent},

  {path:'view-users', component:ViewUsersComponent},
  {path:'view-customer', component:ViewCustomerComponent},
  {path:'view-scheme', component:ViewSchemeComponent},
  {path:'add-new-scheme', component:AddNewSchemeComponent},
  {path:'view-app-users', component:ViewAppUsersComponent},
  {path:'build-team', component:BuildTeamComponent},
  
  {path:'add-visit-purpose-category', component:AddVisitPurposeCategoryComponent},
  {path:'view-visit-purpose-category', component: ViewVisitPurposeCategoryComponent},
  
  {path:'view-category', component:ViewCategoryComponent},
  {path:'add-role', component:AddRoleComponent},
  {path:'view-role', component:ViewRoleComponent},
  {path:'view-extra-expenses-category', component:ViewExtraExpensesCategoryComponent},
  {path:'add-task-name', component: AddTaskNameComponent},
  {path:'view-task-name', component: ViewTaskNameComponent},


];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
