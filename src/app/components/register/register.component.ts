import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private _studentService:StudentService, private _as: AuthService, private router: Router) {
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
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$')
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      cin: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('', [
        Validators.required,
      ]),

    }

    this.registerForm = fb.group(formControls);
  }

  get firstname() { return this.registerForm.get('firstname'); }
  get lastname() { return this.registerForm.get('lastname'); }
  get cin() { return this.registerForm.get('cin'); }
  get address() { return this.registerForm.get('address'); }
  get phone() { return this.registerForm.get('phone'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get repassword() { return this.registerForm.get('repassword'); }


  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
    let data = this.registerForm.value;
    let student = new Student(data.firstname,data.lastname,data.cin,data.address,data.phone,data.email,data.password);
    
    this._studentService.registerStudent(student).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/']);
      }
      ,
      error => console.log(error)
    )
  }
}
