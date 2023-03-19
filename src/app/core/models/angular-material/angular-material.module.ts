import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';



const material = [
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatRippleModule,
    MatMenuModule,
    MatCheckboxModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [
    ...material
  ]
})
export class AngularMaterialModule { }
