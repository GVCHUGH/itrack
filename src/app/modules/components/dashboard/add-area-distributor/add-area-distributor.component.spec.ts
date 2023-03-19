import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAreaDistributorComponent } from './add-area-distributor.component';

describe('AddAreaDistributorComponent', () => {
  let component: AddAreaDistributorComponent;
  let fixture: ComponentFixture<AddAreaDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAreaDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAreaDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
