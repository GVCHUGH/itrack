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
import { SettingsComponent } from './settings/settings.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddExtraExpensesCategoryComponent } from './add-extra-expenses-category/add-extra-expenses-category.component';
import { AddVisitPurposeCategoryComponent } from './add-visit-purpose-category/add-visit-purpose-category.component';
import { BuildAttendanceSiteComponent } from './build-attendance-site/build-attendance-site.component';
import { UploadSalesComponent } from './upload-sales/upload-sales.component';
import { PreBookingConfigurationComponent } from './pre-booking-configuration/pre-booking-configuration.component';
import { VisitsComponent } from './visits/visits.component';
import { FormControl } from '@angular/forms';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';
import { ViewEmailTemplateComponent } from './view-email-template/view-email-template.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UploadProductComponent } from './upload-product/upload-product.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddNewSchemeComponent } from './add-new-scheme/add-new-scheme.component';
import { ViewSchemeComponent } from './view-scheme/view-scheme.component';



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
    SettingsComponent,
    AddCategoryComponent,
    AddExtraExpensesCategoryComponent,
    AddVisitPurposeCategoryComponent,
    BuildAttendanceSiteComponent,
    UploadSalesComponent,
    PreBookingConfigurationComponent,
    VisitsComponent,
    ViewDealerComponent,
    ViewEmailTemplateComponent,
    AddProductComponent,
    ViewProductComponent,
    UploadProductComponent,
    ViewUsersComponent,
    ViewCustomerComponent,
    AddNewSchemeComponent,
    ViewSchemeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AdminDashboardComponent,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
