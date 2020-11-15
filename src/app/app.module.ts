import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './top-bar/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ResumeComponent } from './resume/resume.component';
import { GiftIdeasComponent } from './gift-ideas/gift-ideas.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    // RouterModule.forRoot([
    //   {path: '', component: MainPageComponent},
    //   {path: '/resume', component: ResumeComponent},
    //   {path: '/gift-ideas', component: GiftIdeasComponent}
    // ]),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ResumeComponent,
    GiftIdeasComponent,
    MainPageComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }
