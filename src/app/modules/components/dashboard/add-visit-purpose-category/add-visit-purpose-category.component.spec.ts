import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitPurposeCategoryComponent } from './add-visit-purpose-category.component';

describe('AddVisitPurposeCategoryComponent', () => {
  let component: AddVisitPurposeCategoryComponent;
  let fixture: ComponentFixture<AddVisitPurposeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitPurposeCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitPurposeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
