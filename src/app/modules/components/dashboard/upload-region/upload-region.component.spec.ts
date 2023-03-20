import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRegionComponent } from './upload-region.component';

describe('UploadRegionComponent', () => {
  let component: UploadRegionComponent;
  let fixture: ComponentFixture<UploadRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
