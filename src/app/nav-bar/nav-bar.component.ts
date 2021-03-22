import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAVBAR } from '../mock-info/nav-bar'
import { NavBarVisibilityService } from '../services/nav-bar-visibility.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  topNavLinks = NAVBAR;
  

  constructor(
    private router: Router,
    private navBarVisibilityService: NavBarVisibilityService) { }

  ngOnInit(): void {
  }

  goTo(url: string, section) {
    this.router.navigate(['/' + url]);
  } 

  

}
