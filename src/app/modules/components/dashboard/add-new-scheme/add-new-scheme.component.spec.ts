import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSchemeComponent } from './add-new-scheme.component';

describe('AddNewSchemeComponent', () => {
  let component: AddNewSchemeComponent;
  let fixture: ComponentFixture<AddNewSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSchemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
