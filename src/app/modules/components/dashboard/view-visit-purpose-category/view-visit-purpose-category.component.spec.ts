import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitPurposeCategoryComponent } from './view-visit-purpose-category.component';

describe('ViewVisitPurposeCategoryComponent', () => {
  let component: ViewVisitPurposeCategoryComponent;
  let fixture: ComponentFixture<ViewVisitPurposeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitPurposeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitPurposeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
