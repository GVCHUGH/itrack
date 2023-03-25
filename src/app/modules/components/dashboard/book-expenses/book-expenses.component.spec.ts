import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExpensesComponent } from './book-expenses.component';

describe('BookExpensesComponent', () => {
  let component: BookExpensesComponent;
  let fixture: ComponentFixture<BookExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
