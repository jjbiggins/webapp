
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public sections: Array<any> = [{text: 'Resume', id: 'resume'},
    {text: 'About Me', id: 'profile'},
    {text: 'Projects', id: 'projects'}];
  public summary = 'About Me';
  public header = {name: 'index', element: ''};

  ngOnInit() {
  }

}
