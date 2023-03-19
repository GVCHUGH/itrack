import { Component } from '@angular/core';
import { attendanceReport } from 'src/app/core/constant';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent {
  public attendanceReport = attendanceReport;
  public openDrawer:boolean = false;
  openReport(){
    this.openDrawer = !this.openDrawer;
  }

  toggleDrawer() {
    this.openDrawer = !this.openDrawer;
  }
}
