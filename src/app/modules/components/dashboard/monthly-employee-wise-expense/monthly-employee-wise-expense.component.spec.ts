import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEmployeeWiseExpenseComponent } from './monthly-employee-wise-expense.component';

describe('MonthlyEmployeeWiseExpenseComponent', () => {
  let component: MonthlyEmployeeWiseExpenseComponent;
  let fixture: ComponentFixture<MonthlyEmployeeWiseExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyEmployeeWiseExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyEmployeeWiseExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
