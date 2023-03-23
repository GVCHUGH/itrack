import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmailerComponent } from './add-new-emailer.component';

describe('AddNewEmailerComponent', () => {
  let component: AddNewEmailerComponent;
  let fixture: ComponentFixture<AddNewEmailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEmailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewEmailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
