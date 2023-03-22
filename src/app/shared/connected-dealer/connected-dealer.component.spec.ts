import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedDealerComponent } from './connected-dealer.component';

describe('ConnectedDealerComponent', () => {
  let component: ConnectedDealerComponent;
  let fixture: ComponentFixture<ConnectedDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedDealerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectedDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
