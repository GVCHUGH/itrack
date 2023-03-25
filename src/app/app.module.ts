import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/components/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/components/dashboard/dashboard.module';
import { StockComponent } from './shared/stock/stock.component';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatMomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
