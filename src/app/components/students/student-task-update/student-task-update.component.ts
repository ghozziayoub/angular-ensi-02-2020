import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-student-task-update',
  templateUrl: './student-task-update.component.html',
  styleUrls: ['./student-task-update.component.css']
})
export class StudentTaskUpdateComponent implements OnInit {

  updateTaskForm: FormGroup;
  _title: String;

  constructor(private fb: FormBuilder, private router: Router, private _ts: TaskService, private route: ActivatedRoute) {
    
    let idTask = this.route.snapshot.paramMap.get('idTask');
    this._ts.getTask(idTask).subscribe(
      res => {
        this._title = res.title;        
      },
      err => console.log(err)
    )

    let formControls = {
      title: new FormControl('', [
        Validators.required,
      ])
    }

    this.updateTaskForm = fb.group(formControls);
  }

  get title() { return this.updateTaskForm.get('title'); }


  ngOnInit(): void {
    

  }

  updateTask() {
    let data = this.updateTaskForm.value;
    let idTask = this.route.snapshot.paramMap.get('idTask');
    let token = localStorage.getItem('token');

    const helper = new JwtHelperService();
    const studentId = helper.decodeToken(token).studentId;
  

    let task = new Task(idTask,data.title,);

    this._ts.updateTask(task).subscribe(
      result => {
        this.router.navigate(['/students/tasks', studentId])
      },
      error => {
        console.log(error);
      }
    );

  }

}
