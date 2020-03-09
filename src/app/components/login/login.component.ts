import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Student } from 'src/app/models/student';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _as: AuthService, private router: Router) {
    let token = localStorage.getItem('token');
    if (token) {
      if (_as.isAdmin()) {
        router.navigate(['/students'])
      } else if (_as.isStudent()) {
        const helper = new JwtHelperService();
        const studentId = helper.decodeToken(token).studentId;
        router.navigate(['/students/tasks', studentId])
      }
    }

    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = fb.group(formControls);
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  ngOnInit(): void {
  }

  login() {
    let data = this.loginForm.value;
    let user = new Student(null, null, null, null, null, data.email, data.password);

    this._as.loginUser(user).subscribe(
      result => {
        let token = result.token;

        localStorage.setItem('token', token);

        const helper = new JwtHelperService();

        const decodedToken = helper.decodeToken(token);

        let role = decodedToken.role;
        let id = decodedToken.studentId
        if (role == "admin") {
          this.router.navigate(['/students']);
        } else if (role == "student") {
          this.router.navigate(['/students/tasks/', id]);
        }


      },
      error => {
        console.log(error);
      }
    );

  }

}
