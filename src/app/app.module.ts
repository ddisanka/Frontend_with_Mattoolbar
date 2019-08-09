import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StudentDataService} from '../app/DataService/StudentDataService';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AngularCRUDComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    CourseCrudComponent,
    CourseAddComponent,
    CourseUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
