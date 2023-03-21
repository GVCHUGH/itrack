import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtraExpensesCategoryComponent } from './add-extra-expenses-category.component';

describe('AddExtraExpensesCategoryComponent', () => {
  let component: AddExtraExpensesCategoryComponent;
  let fixture: ComponentFixture<AddExtraExpensesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExtraExpensesCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExtraExpensesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
