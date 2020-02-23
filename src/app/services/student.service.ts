import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _registerStudentsUrl = "https://node-ensi-02-2020.herokuapp.com/student/register";

  constructor(private http: HttpClient) { }

  registerStudent(student) {
    return this.http.post<any>(this._registerStudentsUrl,student); 
  }

}
