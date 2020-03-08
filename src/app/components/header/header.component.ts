import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Boolean;
  isAdmin : Boolean;

  constructor(private _as:AuthService,private router :Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this._as.isLoggedIn();
    this.isAdmin = this._as.isAdmin();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
