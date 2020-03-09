import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTaskUpdateComponent } from './student-task-update.component';

describe('StudentTaskUpdateComponent', () => {
  let component: StudentTaskUpdateComponent;
  let fixture: ComponentFixture<StudentTaskUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTaskUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTaskUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
