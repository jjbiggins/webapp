
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public summary = 'About Me';
  public header = {name: 'index', element: ''};

  ngOnInit() {
  }

}
