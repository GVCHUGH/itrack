import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPerformanceReportComponent } from './target-performance-report.component';

describe('TargetPerformanceReportComponent', () => {
  let component: TargetPerformanceReportComponent;
  let fixture: ComponentFixture<TargetPerformanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetPerformanceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetPerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
