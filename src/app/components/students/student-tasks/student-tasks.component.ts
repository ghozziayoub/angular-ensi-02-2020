import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-tasks',
  templateUrl: './student-tasks.component.html',
  styleUrls: ['./student-tasks.component.css']
})
export class StudentTasksComponent implements OnInit {

  tasksList = []

  doneList = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
