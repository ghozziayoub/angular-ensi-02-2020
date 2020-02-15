import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path:'students',
    component:StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
