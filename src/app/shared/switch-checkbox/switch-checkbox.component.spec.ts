import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCheckboxComponent } from './switch-checkbox.component';

describe('SwitchCheckboxComponent', () => {
  let component: SwitchCheckboxComponent;
  let fixture: ComponentFixture<SwitchCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
