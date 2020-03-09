import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { StudentTasksComponent } from './components/students/student-tasks/student-tasks.component';
import { Page401Component } from './components/page401/page401.component';
import { Page404Component } from './components/page404/page404.component';
import { StudentTaskAddComponent } from './components/students/student-task-add/student-task-add.component';
import { StudentTaskUpdateComponent } from './components/students/student-task-update/student-task-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    StudentsListComponent,
    StudentTasksComponent,
    Page401Component,
    Page404Component,
    StudentTaskAddComponent,
    StudentTaskUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
