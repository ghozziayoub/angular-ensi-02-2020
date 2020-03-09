import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _addTaskUrl = "https://node-ensi-02-2020.herokuapp.com/task/add";
  private _allTasksUrl = "https://node-ensi-02-2020.herokuapp.com/task/all/";
  private _oneTaskUrl = "https://node-ensi-02-2020.herokuapp.com/task/";
  private _endTaskUrl = "https://node-ensi-02-2020.herokuapp.com/task/endTask";
  private _deleteTaskUrl = "https://node-ensi-02-2020.herokuapp.com/task/delete/";
  private _updateTaskUrl="https://node-ensi-02-2020.herokuapp.com/task/update";

  constructor(private http: HttpClient) { }

  addTask(task: Task) {
    return this.http.post<any>(this._addTaskUrl, task);
  }

  getAllTasks(studentId: String) {
    return this.http.get<any>(this._allTasksUrl + studentId);
  }

  getTask(taskId: String) {
    return this.http.get<any>(this._oneTaskUrl + taskId);
  }

  updateTask(task:Task) {
    return this.http.put<any>(this._updateTaskUrl, task);
  }

  endTask(taskId: String) {
    return this.http.put<any>(this._endTaskUrl, { taskId });
  }

  deleteTask(taskId: String) {
    return this.http.delete<any>(this._deleteTaskUrl + taskId);
  }

}
