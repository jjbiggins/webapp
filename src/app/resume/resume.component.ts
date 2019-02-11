import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public summary = 'Resume';
  public header = {name: 'resume', element: ''};
  constructor() { }

  ngOnInit() {
  }

}
