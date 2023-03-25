import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseGroupComponent } from './add-expense-group.component';

describe('AddExpenseGroupComponent', () => {
  let component: AddExpenseGroupComponent;
  let fixture: ComponentFixture<AddExpenseGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpenseGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpenseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
