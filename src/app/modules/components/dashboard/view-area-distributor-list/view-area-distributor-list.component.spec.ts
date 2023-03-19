import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAreaDistributorListComponent } from './view-area-distributor-list.component';

describe('ViewAreaDistributorListComponent', () => {
  let component: ViewAreaDistributorListComponent;
  let fixture: ComponentFixture<ViewAreaDistributorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAreaDistributorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAreaDistributorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
