import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveCategoryComponent } from './view-leave-category.component';

describe('ViewLeaveCategoryComponent', () => {
  let component: ViewLeaveCategoryComponent;
  let fixture: ComponentFixture<ViewLeaveCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeaveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
