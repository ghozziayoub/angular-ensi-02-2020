import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students = [];

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this._adminService.getAllStudents().subscribe(
      (studentsFromDb)=>{
        this.students = studentsFromDb
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteStudent(student) {
    let indice = this.students.indexOf(student);
    this.students.splice(indice, 1);
  }

}
