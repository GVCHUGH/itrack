import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWiseTargetsComponent } from './product-wise-targets.component';

describe('ProductWiseTargetsComponent', () => {
  let component: ProductWiseTargetsComponent;
  let fixture: ComponentFixture<ProductWiseTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWiseTargetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWiseTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
