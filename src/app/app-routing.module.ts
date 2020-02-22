import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { StudentTasksComponent } from './components/students/student-tasks/student-tasks.component';

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
    path : 'register',
    component:RegisterComponent
  },
  {
    path:'students',
    children:[
      {
        path:'',
        component:StudentsListComponent
      },
      {
        path:'tasks/:idStudent',
        component:StudentTasksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
