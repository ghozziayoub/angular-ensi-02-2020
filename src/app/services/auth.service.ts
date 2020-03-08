import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "https://node-ensi-02-2020.herokuapp.com/student/login";

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    if (token) {
      let role = decodedToken.role;

      if (role == "admin") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }

  }

  isStudent() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    if (token) {
      let role = decodedToken.role;

      if (role == "student") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
