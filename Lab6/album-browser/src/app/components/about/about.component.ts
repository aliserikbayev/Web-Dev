import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about">
      <div class="about-inner">
        <div class="page-label">[ ABOUT ]</div>
        <h1>About This App</h1>

        <div class="card">
          <h2>Album Browser</h2>
          <p>
            Album Browser is a single-page application (SPA) built with Angular that demonstrates 
            routing, HTTP client usage, and service-layer architecture. It fetches data from the 
            JSONPlaceholder REST API and allows users to browse, edit, and explore photo albums.
          </p>
        </div>

        <div class="card">
          <h2>Technical Stack</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <span class="tech-name">Angular</span>
              <span class="tech-desc">Component framework</span>
            </div>
            <div class="tech-item">
              <span class="tech-name">TypeScript</span>
              <span class="tech-desc">Type-safe JavaScript</span>
            </div>
            <div class="tech-item">
              <span class="tech-name">Angular Router</span>
              <span class="tech-desc">Client-side navigation</span>
            </div>
            <div class="tech-item">
              <span class="tech-name">HttpClient</span>
              <span class="tech-desc">REST API integration</span>
            </div>
            <div class="tech-item">
              <span class="tech-name">RxJS</span>
              <span class="tech-desc">Reactive programming</span>
            </div>
            <div class="tech-item">
              <span class="tech-name">JSONPlaceholder</span>
              <span class="tech-desc">Mock REST API</span>
            </div>
          </div>
        </div>

        <div class="card">
          <h2>Project Info</h2>
          <div class="info-row">
            <span class="info-label">Developer</span>
            <span class="info-value">Your Name</span>
          </div>
          <div class="info-row">
            <span class="info-label">Course</span>
            <span class="info-value">Web Application Development — Lab 6</span>
          </div>
          <div class="info-row">
            <span class="info-label">API Source</span>
            <span class="info-value">jsonplaceholder.typicode.com</span>
          </div>
          <div class="info-row">
            <span class="info-label">Year</span>
            <span class="info-value">2024</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about {
      min-height: calc(100vh - 72px);
      padding: 4rem 2rem;
      display: flex;
      justify-content: center;
    }

    .about-inner {
      max-width: 700px;
      width: 100%;
      animation: fadeUp 0.6s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .page-label {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      color: var(--accent);
      margin-bottom: 0.75rem;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 2.5rem;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 2rem;
      margin-bottom: 1.5rem;
      transition: border-color 0.2s ease;
    }

    .card:hover {
      border-color: rgba(255, 200, 80, 0.3);
    }

    h2 {
      font-family: 'Space Mono', monospace;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent);
      margin: 0 0 1.25rem;
    }

    p {
      color: var(--text-muted);
      line-height: 1.8;
      margin: 0;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      padding: 0.75rem;
      border: 1px solid var(--border);
    }

    .tech-name {
      font-family: 'Space Mono', monospace;
      font-size: 0.85rem;
      color: var(--text);
    }

    .tech-desc {
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border);
    }

    .info-row:last-child {
      border-bottom: none;
    }

    .info-label {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .info-value {
      font-size: 0.9rem;
      color: var(--text);
    }
  `]
})
export class AboutComponent {}
