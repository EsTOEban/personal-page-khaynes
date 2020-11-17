import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PdfViewerModule} from 'ng2-pdf-viewer';

import {MaterialModule} from './top-bar/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {ResumeComponent} from './resume/resume.component';
import {GiftIdeasComponent} from './gift-ideas/gift-ideas.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ContentService} from './shared/services/content.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ResumeComponent,
    GiftIdeasComponent,
    MainPageComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ContentService],
})
export class AppModule {
}
