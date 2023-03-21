import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBookingConfigurationComponent } from './pre-booking-configuration.component';

describe('PreBookingConfigurationComponent', () => {
  let component: PreBookingConfigurationComponent;
  let fixture: ComponentFixture<PreBookingConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreBookingConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreBookingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
