import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAreaDistributorComponent } from './upload-area-distributor.component';

describe('UploadAreaDistributorComponent', () => {
  let component: UploadAreaDistributorComponent;
  let fixture: ComponentFixture<UploadAreaDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAreaDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAreaDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
