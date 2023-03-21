import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmittedFormsComponent } from './view-submitted-forms.component';

describe('ViewSubmittedFormsComponent', () => {
  let component: ViewSubmittedFormsComponent;
  let fixture: ComponentFixture<ViewSubmittedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubmittedFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubmittedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
