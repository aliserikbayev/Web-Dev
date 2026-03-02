import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <div class="home">
      <div class="hero">
        <div class="hero-label">[ VISUAL ARCHIVE ]</div>
        <h1 class="hero-title">
          <span class="line-1">Explore</span>
          <span class="line-2">Albums</span>
        </h1>
        <p class="hero-sub">
          Browse a curated collection of photo albums. Discover, edit, and explore
          thousands of images organized into collections.
        </p>
        <a routerLink="/albums" class="cta-btn">
          <span>Browse Albums</span>
          <span class="arrow">→</span>
        </a>
      </div>

      <div class="stats-row">
        <div class="stat">
          <span class="stat-num">100</span>
          <span class="stat-label">Albums</span>
        </div>
        <div class="stat-divider">◈</div>
        <div class="stat">
          <span class="stat-num">5,000</span>
          <span class="stat-label">Photos</span>
        </div>
        <div class="stat-divider">◈</div>
        <div class="stat">
          <span class="stat-num">10</span>
          <span class="stat-label">Users</span>
        </div>
      </div>

      <div class="grid-decoration" aria-hidden="true">
        <div *ngFor="let i of cells" class="grid-cell"></div>
      </div>
    </div>
  `,
  styles: [`
    .home {
      min-height: calc(100vh - 72px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      position: relative;
      overflow: hidden;
    }

    .hero {
      text-align: center;
      max-width: 700px;
      z-index: 2;
      animation: fadeUp 0.8s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero-label {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      color: var(--accent);
      margin-bottom: 1.5rem;
      animation: fadeUp 0.8s 0.1s ease both;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(4rem, 12vw, 8rem);
      line-height: 0.9;
      margin: 0 0 2rem;
      animation: fadeUp 0.8s 0.2s ease both;
    }

    .line-1 {
      display: block;
      color: var(--text-muted);
      font-weight: 400;
      font-style: italic;
    }

    .line-2 {
      display: block;
      color: var(--accent);
      font-weight: 700;
    }

    .hero-sub {
      font-size: 1.05rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 2.5rem;
      animation: fadeUp 0.8s 0.3s ease both;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.9rem 2.2rem;
      background: var(--accent);
      color: #000;
      font-family: 'Space Mono', monospace;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
      animation: fadeUp 0.8s 0.4s ease both;
    }

    .cta-btn:hover {
      background: #fff;
      transform: translateX(4px);
    }

    .arrow {
      font-size: 1.1rem;
      transition: transform 0.2s ease;
    }

    .cta-btn:hover .arrow {
      transform: translateX(4px);
    }

    .stats-row {
      display: flex;
      align-items: center;
      gap: 3rem;
      margin-top: 5rem;
      z-index: 2;
      animation: fadeUp 0.8s 0.5s ease both;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }

    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      color: var(--text);
      font-weight: 700;
    }

    .stat-label {
      font-family: 'Space Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .stat-divider {
      color: var(--accent);
      opacity: 0.4;
      font-size: 0.8rem;
    }

    .grid-decoration {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(8, 1fr);
      z-index: 1;
      pointer-events: none;
      opacity: 0.04;
    }

    .grid-cell {
      border: 1px solid var(--accent);
    }
  `]
})
export class HomeComponent {
  cells = Array(96).fill(0);
}
