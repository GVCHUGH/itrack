import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStockComponent } from './upload-stock.component';

describe('UploadStockComponent', () => {
  let component: UploadStockComponent;
  let fixture: ComponentFixture<UploadStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
