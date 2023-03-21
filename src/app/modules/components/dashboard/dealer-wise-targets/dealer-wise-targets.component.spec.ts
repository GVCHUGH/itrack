import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerWiseTargetsComponent } from './dealer-wise-targets.component';

describe('DealerWiseTargetsComponent', () => {
  let component: DealerWiseTargetsComponent;
  let fixture: ComponentFixture<DealerWiseTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerWiseTargetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerWiseTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
