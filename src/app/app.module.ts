
import { CoursesService } from './courses.service';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavComponent } from './fav/fav.component';
import { CapitalComponent } from './capital/capital.component';
import { TitlecasePipe } from './titlecase.pipe';
import { NgContentComponent } from './ng-content/ng-content.component';
import { LikeComponent } from './like/like.component';
import { SwitchComponent } from './switch/switch.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { NgmodelFormComponent } from './ngmodel-form/ngmodel-form.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TodoComponent } from './todo/todo.component';
import { ChangePswComponent } from './change-psw/change-psw.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { MoshGitComponent } from './mosh-git/mosh-git.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavComponent,
    CapitalComponent,
    TitlecasePipe,
    NgContentComponent,
    LikeComponent,
    SwitchComponent,
    InputFormatDirective,
    ZippyComponent,
    NgmodelFormComponent,
    CreateCourseComponent,
    SignupFormComponent,
    TodoComponent,
    ChangePswComponent,
    HttpServiceComponent,
    MoshGitComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
    

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '' , redirectTo:'/followers', pathMatch: 'full'},
      {path:'followers',component:MoshGitComponent},
      {path:'followers/:id/:username',component: GithubProfileComponent},
      {path:'followers',component:MoshGitComponent},
      {path:'todo',component:TodoComponent},
      {path:'courses',component: CreateCourseComponent},
      {path:'changepass',component:ChangePswComponent},
      {path:'signup',component: SignupFormComponent},
      {path:'**',component:NotFoundComponent},

    ])
    
  ],
  providers: [
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
