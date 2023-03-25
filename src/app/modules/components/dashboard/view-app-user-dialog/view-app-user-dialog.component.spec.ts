import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppUserDialogComponent } from './view-app-user-dialog.component';

describe('ViewAppUserDialogComponent', () => {
  let component: ViewAppUserDialogComponent;
  let fixture: ComponentFixture<ViewAppUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
