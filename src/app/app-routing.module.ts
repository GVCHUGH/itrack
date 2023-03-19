import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from './shared/no-page/no-page.component';

const routes: Routes = [
  {path:'',
  loadChildren: () =>
  import('./modules/components/dashboard/dashboard.module').then(
    (m) => m.DashboardModule
    ),},
  {path:'dashboard',
    loadChildren: () =>
    import('./modules/components/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
      ),},
  {path:'',
      loadChildren: () =>
      import('./modules/components/auth/auth.module').then(
        (m) => m.AuthModule
      ),},
      {path:'**', component:NoPageComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
