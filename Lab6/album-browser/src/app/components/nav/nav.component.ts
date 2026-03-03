import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <span class="brand">Album Browser</span>
      <ul class="nav-links">
        <li><a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
        <li><a routerLink="/albums" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Albums</a></li>
        <li><a routerLink="/albums/new" routerLinkActive="active">New Album</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      height: 56px;
      background: #3f51b5;
      color: white;
    }
    .brand { font-size: 1.1rem; font-weight: bold; }
    .nav-links { list-style: none; display: flex; gap: 8px; }
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 6px 12px;
      border-radius: 4px;
    }
    .nav-links a:hover { background: rgba(255,255,255,0.15); }
    .nav-links a.active { background: rgba(255,255,255,0.25); font-weight: bold; }
  `]
})
export class NavComponent {}
