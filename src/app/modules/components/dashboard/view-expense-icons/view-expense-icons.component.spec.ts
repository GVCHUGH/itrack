import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenseIconsComponent } from './view-expense-icons.component';

describe('ViewExpenseIconsComponent', () => {
  let component: ViewExpenseIconsComponent;
  let fixture: ComponentFixture<ViewExpenseIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpenseIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExpenseIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
