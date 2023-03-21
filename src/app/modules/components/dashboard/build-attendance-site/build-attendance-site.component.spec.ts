import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildAttendanceSiteComponent } from './build-attendance-site.component';

describe('BuildAttendanceSiteComponent', () => {
  let component: BuildAttendanceSiteComponent;
  let fixture: ComponentFixture<BuildAttendanceSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildAttendanceSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildAttendanceSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
