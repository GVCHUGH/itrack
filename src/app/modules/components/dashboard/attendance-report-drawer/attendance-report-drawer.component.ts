import { Component, Output, EventEmitter } from '@angular/core';
import { attendanceList } from 'src/app/core/constant';

@Component({
  selector: 'app-attendance-report-drawer',
  templateUrl: './attendance-report-drawer.component.html',
  styleUrls: ['./attendance-report-drawer.component.scss']
})
export class AttendanceReportDrawerComponent {
  @Output() drawer = new EventEmitter();
  public attendanceList = attendanceList;
}
