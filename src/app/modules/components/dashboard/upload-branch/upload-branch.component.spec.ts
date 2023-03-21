import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBranchComponent } from './upload-branch.component';

describe('UploadBranchComponent', () => {
  let component: UploadBranchComponent;
  let fixture: ComponentFixture<UploadBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
