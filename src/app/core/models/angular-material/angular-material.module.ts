import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatTabsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
