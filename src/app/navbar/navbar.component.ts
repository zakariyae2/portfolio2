import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeSection: string="";

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Extract the section from the URL and set it as the active section
        this.activeSection = event.url.split('#')[1] || 'home';
      }
    });
  }
  scrollToAbout(fragment: any) {
    this.router.navigateByUrl('#'+fragment);
  }
}
