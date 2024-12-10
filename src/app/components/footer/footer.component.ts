// src/app/footer.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  getPosition(): string {
    const staticRoutes = ['/gallery', '/references'];
    const isSmallScreen = window.innerWidth <= 500;

    if (this.currentRoute === '/contact') {
      return 'fixed';
    }

    if (isSmallScreen) {
      return 'static';
    }

    return staticRoutes.includes(this.currentRoute) ? 'static' : 'fixed';
  }

}
