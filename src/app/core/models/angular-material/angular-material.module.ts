import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';




const material = [
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatRippleModule,
    MatMenuModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule
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
