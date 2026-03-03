import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  template: `
    <div class="page">
      <button class="btn-back" (click)="goBack()">← Back to Albums</button>

      <div *ngIf="loading">Loading album...</div>

      <div *ngIf="!loading && album">
        <h1>Album #{{ album.id }}</h1>
        <p><strong>Title:</strong> {{ album.title }}</p>
        <p><strong>User ID:</strong> {{ album.userId }}</p>

        <div class="edit-section">
          <h2>Edit Title</h2>
          <input type="text" [(ngModel)]="editTitle" class="input" />
          <button class="btn" (click)="saveAlbum()" [disabled]="saving">
            {{ saving ? 'Saving...' : 'Save' }}
          </button>
          <span *ngIf="saveSuccess" class="success-msg">Saved!</span>
        </div>

        <div class="actions">
          <a [routerLink]="['/albums', album.id, 'photos']" class="btn">View Photos</a>
        </div>
      </div>

      <div *ngIf="!loading && !album">Album not found.</div>
    </div>
  `,
  styles: [`
    .page { max-width: 600px; margin: 40px auto; padding: 0 16px; }
    .btn-back {
      background: none; border: none; color: #3f51b5;
      cursor: pointer; font-size: 0.95rem; margin-bottom: 20px; padding: 0;
    }
    .btn-back:hover { text-decoration: underline; }
    h1 { margin-bottom: 12px; }
    p { margin-bottom: 8px; color: #444; }
    .edit-section { margin: 24px 0; }
    h2 { font-size: 1rem; margin-bottom: 10px; }
    .input {
      width: 100%; padding: 8px; border: 1px solid #ccc;
      border-radius: 4px; font-size: 1rem; margin-bottom: 10px;
    }
    .btn {
      display: inline-block; padding: 8px 18px; background: #3f51b5;
      color: white; border: none; border-radius: 4px; cursor: pointer;
      font-size: 0.95rem; text-decoration: none;
    }
    .btn:hover:not(:disabled) { background: #303f9f; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .success-msg { margin-left: 12px; color: green; font-size: 0.9rem; }
    .actions { margin-top: 20px; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saveSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    this.saving = true;
    this.saveSuccess = false;
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album = { ...this.album!, title: this.editTitle };
        this.saving = false;
        this.saveSuccess = true;
        this.cdr.detectChanges();
        setTimeout(() => { this.saveSuccess = false; this.cdr.detectChanges(); }, 3000);
      },
      error: () => {
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
