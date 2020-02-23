import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _getAllStudentsUrl = "https://node-ensi-02-2020.herokuapp.com/admin/students";
  private _updateStudentState = "https://node-ensi-02-2020.herokuapp.com/admin/state";
  private _deleteStudent = "https://node-ensi-02-2020.herokuapp.com/admin/delete-student";

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get<any>(this._getAllStudentsUrl);
  }

  updateStudentState(studentId){
    return this.http.put<any>(this._updateStudentState,studentId);
  }

  deleteStudent(studentId){
    return this.http.delete<any>(this._deleteStudent+"/"+studentId);
  }

}
