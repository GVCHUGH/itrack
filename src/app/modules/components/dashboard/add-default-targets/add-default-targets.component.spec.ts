import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDefaultTargetsComponent } from './add-default-targets.component';

describe('AddDefaultTargetsComponent', () => {
  let component: AddDefaultTargetsComponent;
  let fixture: ComponentFixture<AddDefaultTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDefaultTargetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDefaultTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
