import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _as: AuthService, private router: Router) {
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
  }

  ngOnInit(): void {
  }

}
