import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _getAllStudentsUrl = "https://node-ensi-02-2020.herokuapp.com/admin/students";

  constructor(private http: HttpClient) { }

  getAllStudents() {
    let students = this.http.get<any>(this._getAllStudentsUrl);
    return students;
  }

}
