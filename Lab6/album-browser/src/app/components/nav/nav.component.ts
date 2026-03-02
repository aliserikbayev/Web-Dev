import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-brand">
        <span class="brand-icon">◈</span>
        <span class="brand-text">ALBUM<strong>BROWSER</strong></span>
      </div>
      <ul class="nav-links">
        <li>
          <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
        <li>
          <a routerLink="/albums" routerLinkActive="active">Albums</a>
        </li>
        <li>
          <a routerLink="/about" routerLinkActive="active">About</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2.5rem;
      background: rgba(10, 10, 14, 0.92);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 200, 80, 0.15);
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      color: var(--text);
    }

    .brand-icon {
      font-size: 1.4rem;
      color: var(--accent);
      animation: spin 8s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .brand-text {
      font-family: 'Space Mono', monospace;
      font-size: 0.9rem;
      letter-spacing: 0.15em;
      color: var(--text-muted);
    }

    .brand-text strong {
      color: var(--accent);
    }

    .nav-links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 0.25rem;
    }

    .nav-links a {
      display: block;
      padding: 0.5rem 1.1rem;
      font-family: 'Space Mono', monospace;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
      text-decoration: none;
      border: 1px solid transparent;
      transition: all 0.2s ease;
    }

    .nav-links a:hover {
      color: var(--text);
      border-color: rgba(255, 200, 80, 0.3);
    }

    .nav-links a.active {
      color: var(--accent);
      border-color: var(--accent);
      background: rgba(255, 200, 80, 0.08);
    }
  `]
})
export class NavComponent {}
