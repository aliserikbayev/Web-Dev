import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [NgIf, FormsModule],
  template: `
    <div class="page">
      <h1>Create New Album</h1>

      <form class="form" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="userId">User ID</label>
          <input
            id="userId"
            type="number"
            [(ngModel)]="userId"
            name="userId"
            min="1"
            max="10"
            placeholder="Enter user ID (1-10)"
            class="input"
          />
          <span class="error" *ngIf="errors.userId">{{ errors.userId }}</span>
        </div>

        <div class="form-group">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            [(ngModel)]="title"
            name="title"
            placeholder="Enter album title"
            class="input"
          />
          <span class="error" *ngIf="errors.title">{{ errors.title }}</span>
        </div>

        <div *ngIf="serverError" class="server-error">{{ serverError }}</div>

        <div class="buttons">
          <button type="submit" class="btn btn-primary" [disabled]="loading">
            {{ loading ? 'Creating...' : 'Create' }}
          </button>
          <button type="button" class="btn btn-cancel" (click)="cancel()">Cancel</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .page { max-width: 500px; margin: 40px auto; padding: 0 16px; }
    h1 { margin-bottom: 24px; }
    .form { display: flex; flex-direction: column; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 4px; }
    label { font-weight: bold; font-size: 0.9rem; }
    .input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    .input:focus { outline: none; border-color: #3f51b5; }
    .error { color: #e53935; font-size: 0.85rem; }
    .server-error {
      padding: 10px;
      background: #ffebee;
      border: 1px solid #e53935;
      border-radius: 4px;
      color: #e53935;
      font-size: 0.9rem;
    }
    .buttons { display: flex; gap: 10px; margin-top: 8px; }
    .btn {
      padding: 9px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.95rem;
    }
    .btn-primary { background: #3f51b5; color: white; }
    .btn-primary:hover:not(:disabled) { background: #303f9f; }
    .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-cancel { background: #eee; color: #333; }
    .btn-cancel:hover { background: #ddd; }
  `]
})
export class AlbumCreateComponent {
  userId: number | null = null;
  title = '';
  loading = false;
  serverError = '';
  errors: { userId?: string; title?: string } = {};

  constructor(private albumService: AlbumService, private router: Router) {}

  validate(): boolean {
    this.errors = {};
    if (!this.userId || this.userId < 1 || this.userId > 10) {
      this.errors.userId = 'User ID is required and must be between 1 and 10.';
    }
    if (!this.title || this.title.trim().length < 3) {
      this.errors.title = 'Title is required and must be at least 3 characters.';
    }
    return Object.keys(this.errors).length === 0;
  }

  onSubmit(): void {
    if (!this.validate()) return;

    this.loading = true;
    this.serverError = '';

    this.albumService.createAlbum({ userId: this.userId!, title: this.title.trim() }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/albums']);
      },
      error: () => {
        this.loading = false;
        this.serverError = 'Failed to create album. Please try again.';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/albums']);
  }
}
