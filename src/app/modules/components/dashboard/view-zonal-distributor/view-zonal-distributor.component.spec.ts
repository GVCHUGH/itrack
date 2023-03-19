import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewZonalDistributorComponent } from './view-zonal-distributor.component';

describe('ViewZonalDistributorComponent', () => {
  let component: ViewZonalDistributorComponent;
  let fixture: ComponentFixture<ViewZonalDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewZonalDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewZonalDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
