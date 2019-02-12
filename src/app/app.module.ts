import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SummaryComponent } from './summary/summary.component';
import { IndexComponent } from './index/index.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ResumeComponent } from './resume/resume.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    IndexComponent,
    SummaryComponent,
    SectionListComponent,
    SectionComponent,
    ResumeComponent,
    PageHeaderComponent,
    AppNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
