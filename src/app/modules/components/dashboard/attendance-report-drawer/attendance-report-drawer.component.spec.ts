import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceReportDrawerComponent } from './attendance-report-drawer.component';

describe('AttendanceReportDrawerComponent', () => {
  let component: AttendanceReportDrawerComponent;
  let fixture: ComponentFixture<AttendanceReportDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceReportDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceReportDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
