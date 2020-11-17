import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import {ResumeComponent} from './resume/resume.component';

const appRoutes: Routes = [
  {path: 'home', component: MainPageComponent, data: { page: 'home' }},
  {path: 'about', component: ResumeComponent, data: { page: 'about' }},
  {path: 'brianna', component: MainPageComponent, data: { page: 'brianna' }},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
