import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExtraExpensesCategoryComponent } from './view-extra-expenses-category.component';

describe('ViewExtraExpensesCategoryComponent', () => {
  let component: ViewExtraExpensesCategoryComponent;
  let fixture: ComponentFixture<ViewExtraExpensesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExtraExpensesCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExtraExpensesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
