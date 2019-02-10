import {Component, HostListener, Input, OnInit} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() header: any;
  currPos: Number = 0;
  changePos: Number = 0;
  constructor() { }

  ngOnInit() {
    const header = document.getElementById('header');
    header.innerHTML = this.header.element;
  }
  @HostListener('window:scroll', []) onScroll() {
    // do some stuff here when the window is scrolled
    document.body.removeAttribute('style');
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    const navbartext = document.getElementById('navbar-brand');
    const github = document.getElementById('github');
    const linkedin = document.getElementById('linkedin');
    /*const hero = document.getElementById('hero');*/
    const verticalOffset = window.pageYOffset
      || document.getElementById('header').scrollTop
      || document.body.scrollTop || 0;
    this.currPos = verticalOffset;
    if (this.currPos > this.changePos && verticalOffset > (header.offsetHeight)) {
      header.className = 'header-sticky';
      navbar.className = 'navbar-sticky navbar-expand-md fixed-top';
      navbartext.className = 'navbar-brand sticky';
      github.className = 'github';
      linkedin.className = 'linkedin';
      console.log(this.currPos);
      document.body.setAttribute('style', 'padding-top: 0px;');
    } else if (this.currPos < this.changePos && verticalOffset <= (header.offsetHeight)) {
      header.className = 'header';
      navbar.className = 'navbar navbar-expand-md fixed-top';
      navbartext.className = 'navbar-brand';
      github.className = 'github-white';
      linkedin.className = 'linkedin-white';
      /*hero.className = 'hero';*/
      document.body.removeAttribute('style');
    }
    this.changePos = this.currPos;
  }
}
