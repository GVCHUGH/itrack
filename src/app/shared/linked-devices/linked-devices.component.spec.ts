import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedDevicesComponent } from './linked-devices.component';

describe('LinkedDevicesComponent', () => {
  let component: LinkedDevicesComponent;
  let fixture: ComponentFixture<LinkedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
