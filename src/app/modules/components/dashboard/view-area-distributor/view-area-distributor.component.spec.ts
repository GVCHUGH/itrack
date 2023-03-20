import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAreaDistributorComponent } from './view-area-distributor.component';

describe('ViewAreaDistributorComponent', () => {
  let component: ViewAreaDistributorComponent;
  let fixture: ComponentFixture<ViewAreaDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAreaDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAreaDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
