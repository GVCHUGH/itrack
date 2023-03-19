import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadZonalDistributorComponent } from './upload-zonal-distributor.component';

describe('UploadZonalDistributorComponent', () => {
  let component: UploadZonalDistributorComponent;
  let fixture: ComponentFixture<UploadZonalDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadZonalDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadZonalDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
