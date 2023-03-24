import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveCategoryComponent } from './add-leave-category.component';

describe('AddLeaveCategoryComponent', () => {
  let component: AddLeaveCategoryComponent;
  let fixture: ComponentFixture<AddLeaveCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaveCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
