import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  @Input() sections: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
