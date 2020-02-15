import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = ['mourad','nour','malek','amal'];

  constructor() { }

  ngOnInit(): void {
  }

  deleteStudent(student){
    let indice = this.students.indexOf(student);
    this.students.splice(indice,1);
  }

}
