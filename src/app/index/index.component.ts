
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  public sections: Array<any> = [
    {text: 'StudyBuds', id: 'studybuds', image: 'url("../../assets/img/studybuds-button.png")'},
    {text: 'Hatch', id: 'hatch', image: 'url("../../assets/img/hatch.png")'},
    {text: 'UI Web Development', id: 'iowa', image: 'url("../../assets/img/iowa-football.jpeg")'},
    {text: 'Resume', id: 'resume', image: 'url("../../assets/img/work.jpg")'},
  ];
  public header = {name: 'index', element: ''};

  ngOnInit() {
  }

}
