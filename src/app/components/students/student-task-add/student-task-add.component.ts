import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-student-task-add',
  templateUrl: './student-task-add.component.html',
  styleUrls: ['./student-task-add.component.css']
})
export class StudentTaskAddComponent implements OnInit {

  addTaskForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _ts: TaskService) {

    let formControls = {
      title: new FormControl('', [
        Validators.required,
      ])
    }

    this.addTaskForm = fb.group(formControls);
  }

  get title() { return this.addTaskForm.get('title'); }


  ngOnInit(): void {
  }

  addTask() {
    let data = this.addTaskForm.value;
    let token = localStorage.getItem('token');

    const helper = new JwtHelperService();
    const studentId = helper.decodeToken(token).studentId;

    let task = new Task(null,data.title, studentId);

    this._ts.addTask(task).subscribe(
      result => {
        this.router.navigate(['/students/tasks', studentId])
      },
      error => {
        console.log(error);
      }
    );

  }


}
