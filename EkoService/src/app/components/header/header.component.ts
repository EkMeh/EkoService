import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  activeIsMenu:boolean=false;
  navItems = [
    { navItem: 'home' },
    { navItem: 'services' },
    { navItem: 'gallery' },
    { navItem: 'team' },
    { navItem: 'pages' },
    { navItem: 'blog' },
    { navItem: 'appoinment' },
    { navItem: 'shop' },
    { navItem: 'contact' }
  ];

  useDefaultActive: boolean = false; 
  activeMenuItem: string = 'home'; 

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveMenuItem(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    this.updateActiveMenuItem(this.router.url);
  }

  onHover(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.color = '#0d6efd';
  }

  onLeave(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isActive = target.classList.contains('active');
    target.style.color = isActive ? '#0d6efd' : 'black';
  }

  navMove(item: string) {
    this.activeMenuItem = item;
    this.router.navigate([item]);
  }

  updateActiveMenuItem(url: string) {
    const parts = url.split('/');
    const activeItem = parts[1] || 'home';
    this.activeMenuItem = activeItem;
    this.useDefaultActive = activeItem === 'home';
  }

  activeHamburgerMenu(){
    this.activeIsMenu=!this.activeIsMenu
  }
}
