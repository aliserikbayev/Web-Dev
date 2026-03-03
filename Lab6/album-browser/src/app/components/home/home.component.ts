import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <h1>Welcome to Album Browser</h1>
      <p>Browse and explore a collection of photo albums fetched from the JSONPlaceholder API.</p>
      <a routerLink="/albums" class="btn">Browse Albums</a>
    </div>
  `,
  styles: [`
    .home {
      max-width: 600px;
      margin: 60px auto;
      padding: 0 16px;
      text-align: center;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 16px;
    }
    p {
      color: #666;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      padding: 10px 24px;
      background: #3f51b5;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    .btn:hover { background: #303f9f; }
  `]
})
export class HomeComponent {}
