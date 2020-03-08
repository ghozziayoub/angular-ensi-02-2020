import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-tasks',
  templateUrl: './student-tasks.component.html',
  styleUrls: ['./student-tasks.component.css']
})
export class StudentTasksComponent implements OnInit {

  tasksList = []

  doneList = []
  
  isStudent : Boolean;

  constructor(private _as:AuthService) { }

  ngOnInit(): void {
    this.isStudent = this._as.isStudent();
  }

}
