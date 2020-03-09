import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
@Component({
  selector: 'app-page401',
  templateUrl: './page401.component.html',
  styleUrls: ['./page401.component.css']
})
export class Page401Component implements OnInit {

  constructor( private _as: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  backClicked() {
    let token = localStorage.getItem('token');
    if (token) {
      if (this._as.isAdmin()) {
        this.router.navigate(['/students'])
      } else if (this._as.isStudent()) {
        const helper = new JwtHelperService();
        const studentId = helper.decodeToken(token).studentId;
        this.router.navigate(['/students/tasks', studentId])
      }
    }
  }

}
