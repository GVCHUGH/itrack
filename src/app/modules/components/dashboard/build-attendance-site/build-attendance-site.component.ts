import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-build-attendance-site',
  templateUrl: './build-attendance-site.component.html',
  styleUrls: ['./build-attendance-site.component.scss']
})
export class BuildAttendanceSiteComponent {

  employees:any = new FormControl();

  employeeList = ['Joginder','Rajender','Gaurav'];
  selectedEmployees: any;
}
