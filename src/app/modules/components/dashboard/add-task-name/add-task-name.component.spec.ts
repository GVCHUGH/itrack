import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskNameComponent } from './add-task-name.component';

describe('AddTaskNameComponent', () => {
  let component: AddTaskNameComponent;
  let fixture: ComponentFixture<AddTaskNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
