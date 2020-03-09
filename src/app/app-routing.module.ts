import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { StudentTasksComponent } from './components/students/student-tasks/student-tasks.component';
import { Page401Component } from './components/page401/page401.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './components/page404/page404.component';
import { StudentTaskAddComponent } from './components/students/student-task-add/student-task-add.component';
import { StudentTaskUpdateComponent } from './components/students/student-task-update/student-task-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'students',
    children: [
      {
        path: '',
        component: StudentsListComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'tasks/:idStudent',
        component: StudentTasksComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'tasks/:idStudent/add',
        component: StudentTaskAddComponent
      },
      {
        path: 'tasks/:idStudent/update/:idTask',
        component: StudentTaskUpdateComponent
      }
    ]
  },
  {
    path: 'UNAUTHORIZED',
    component: Page401Component
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
