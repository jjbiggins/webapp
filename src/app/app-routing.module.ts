import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from './index/index.component';
import {ResumeComponent} from './resume/resume.component';


const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: '',
    component: IndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
