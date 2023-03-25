import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseIconsComponent } from './add-expense-icons.component';

describe('AddExpenseIconsComponent', () => {
  let component: AddExpenseIconsComponent;
  let fixture: ComponentFixture<AddExpenseIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpenseIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpenseIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
