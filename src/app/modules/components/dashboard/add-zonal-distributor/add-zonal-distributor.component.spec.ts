import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZonalDistributorComponent } from './add-zonal-distributor.component';

describe('AddZonalDistributorComponent', () => {
  let component: AddZonalDistributorComponent;
  let fixture: ComponentFixture<AddZonalDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZonalDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddZonalDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
