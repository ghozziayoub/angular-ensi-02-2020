import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTaskAddComponent } from './student-task-add.component';

describe('StudentTaskAddComponent', () => {
  let component: StudentTaskAddComponent;
  let fixture: ComponentFixture<StudentTaskAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTaskAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
