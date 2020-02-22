import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students = [
    {
      firstname: 'ali',
      lastname: 'ben ali',
      cin: '00000000',
      adress: 'beb aliwa',
      phone: '79513407',
      email: 'alibenali@yahoo.fr'
    },
    {
      firstname: 'salah',
      lastname: 'ben salah',
      cin: '00000001',
      adress: 'beb el falla',
      phone: '79513893',
      email: 'salahbensalah@yahoo.fr'

    },
    {
      firstname: 'ali',
      lastname: 'ben salah',
      cin: '00000002',
      adress: 'beb swi9a',
      phone: '79478407',
      email: 'alibensalah@yahoo.fr'

    }, {
      firstname: 'salah',
      lastname: 'ben ali',
      cin: '00000003',
      adress: 'beb el khadhra',
      phone: '79741407',
      email: 'salahbenali@yahoo.fr'

    }];
  constructor() { }

  ngOnInit(): void {
  }
  deleteStudent(student) {
    let indice = this.students.indexOf(student);
    this.students.splice(indice, 1);
  }

}
