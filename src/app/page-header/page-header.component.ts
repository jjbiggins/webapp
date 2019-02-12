import {Component, HostListener, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() pageheader: any;
  currPos: Number = 0;
  changePos: Number = 0;
  constructor() { }

  ngOnInit() {
    const pageheader = document.getElementById('pageheader');
    pageheader.innerHTML = this.pageheader.element;
  }
  @HostListener('window:scroll', []) onScroll() {
    // do some stuff here when the window is scrolled
    document.body.removeAttribute('style');
    const pageheader = document.getElementById('pageheader');
    const hero = document.getElementById('hero');
    const navbar = document.getElementById('navbar');
    const navbartext = document.getElementById('navbar-brand');
    const github = document.getElementById('github');
    const linkedin = document.getElementById('linkedin');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const verticalOffset = window.pageYOffset
      || document.getElementById('pageheader').scrollTop
      || document.body.scrollTop || 0;
    this.currPos = verticalOffset;
    if (this.currPos > this.changePos && verticalOffset > (hero.offsetHeight)) {
      pageheader.className = 'pageheader-sticky';
      hero.className = 'hero';
      navbar.className = 'navbar-sticky navbar-expand-md fixed-top';
      navbartext.className = 'navbar-brand sticky';
      github.className = 'github';
      linkedin.className = 'linkedin';
      email.className = 'email';
      phone.className = 'phone';
      console.log(this.currPos);
      document.body.setAttribute('style', 'padding-top: 0px;');
    } else if (this.currPos < this.changePos && verticalOffset <= (hero.offsetHeight)) {
      pageheader.className = 'pageheader';
      hero.className = 'hero';
      navbar.className = 'navbar navbar-expand-md fixed-top';
      navbartext.className = 'navbar-brand';
      github.className = 'github-white';
      linkedin.className = 'linkedin-white';
      document.body.removeAttribute('style');
    }
    this.changePos = this.currPos;
  }
}
