import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRetailerComponent } from './upload-retailer.component';

describe('UploadRetailerComponent', () => {
  let component: UploadRetailerComponent;
  let fixture: ComponentFixture<UploadRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRetailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
