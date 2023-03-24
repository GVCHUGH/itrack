import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskNameComponent } from './view-task-name.component';

describe('ViewTaskNameComponent', () => {
  let component: ViewTaskNameComponent;
  let fixture: ComponentFixture<ViewTaskNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTaskNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
