import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about">
      <h1>About</h1>
      <p>This app was built as part of Lab 6 for the Web Application Development course.</p>
      <p>It uses Angular's Router and HttpClient to browse photo albums from the JSONPlaceholder API.</p>

      <h2>Details</h2>
      <table>
        <tr><td>Developer</td><td>Koltykwaw</td></tr>
        <tr><td>Course</td><td>Web Development</td></tr>
        <tr><td>API</td><td>jsonplaceholder.typicode.com</td></tr>
        <tr><td>Framework</td><td>Angular</td></tr>
      </table>
    </div>
  `,
  styles: [`
    .about {
      max-width: 600px;
      margin: 40px auto;
      padding: 0 16px;
    }
    h1 { margin-bottom: 16px; }
    h2 { margin: 24px 0 12px; }
    p { color: #555; line-height: 1.6; margin-bottom: 10px; }
    table { border-collapse: collapse; width: 100%; }
    td { padding: 8px 12px; border: 1px solid #ddd; }
    tr:nth-child(even) td { background: #f9f9f9; }
    td:first-child { font-weight: bold; width: 160px; }
  `]
})
export class AboutComponent {}
