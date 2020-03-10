import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-tasks',
  templateUrl: './student-tasks.component.html',
  styleUrls: ['./student-tasks.component.css']
})
export class StudentTasksComponent implements OnInit {

  tasksList = []
  doneList = []

  isStudent: Boolean;
  studentId: String;

  constructor(private _as: AuthService, private _ts: TaskService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    if (helper.decodeToken(token).role == "student") {
      this.studentId = helper.decodeToken(token).studentId;
    } else {
      this.studentId = this.route.snapshot.paramMap.get('idStudent');
    }

    this.isStudent = this._as.isStudent();

    this.getAllTasks();

  }

  endTask(taskId: String) {
    this._ts.endTask(taskId).subscribe(
      res => {
        this.getAllTasks();
      },
      err => {
        console.log(err);
      }
    )
  }

  getAllTasks() {
    this._ts.getAllTasks(this.studentId).subscribe(
      res => {
        this.tasksList = res.tasksList;
        this.doneList = res.doneList;
      },
      err => {
        console.log(err);
      }
    )
  }

  delete(taskId: String, index: number, tab: String) {
    if (tab == "task") {
      this.tasksList.splice(index, 1);
    } else {
      this.doneList.splice(index, 1);
    }

    this._ts.deleteTask(taskId).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
