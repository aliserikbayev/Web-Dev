import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="albums-page">
      <div class="page-header">
        <div class="page-label">[ COLLECTION ]</div>
        <h1>All Albums</h1>
        <p class="page-desc">{{ albums.length }} albums in the archive</p>
      </div>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <span>Loading albums…</span>
      </div>

      <div *ngIf="!loading" class="albums-grid">
        <div
          *ngFor="let album of albums; let i = index"
          class="album-card"
          [style.animation-delay]="(i % 20) * 0.03 + 's'"
          (click)="goToAlbum(album.id)"
        >
          <div class="album-id">#{{ album.id.toString().padStart(3, '0') }}</div>
          <div class="album-title">{{ album.title }}</div>
          <div class="album-meta">User {{ album.userId }}</div>
          <div class="album-actions" (click)="$event.stopPropagation()">
            <button class="btn-view" (click)="goToAlbum(album.id)">View →</button>
            <button class="btn-delete" (click)="deleteAlbum(album.id, $event)" [disabled]="deletingId === album.id">
              {{ deletingId === album.id ? '…' : '✕' }}
            </button>
          </div>
        </div>
      </div>

      <div *ngIf="!loading && albums.length === 0" class="empty">
        No albums found.
      </div>
    </div>
  `,
  styles: [`
    .albums-page {
      min-height: calc(100vh - 72px);
      padding: 3rem 2rem 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 3rem;
      animation: fadeUp 0.5s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .page-label {
      font-family: 'Space Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.25em;
      color: var(--accent);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 0.5rem;
    }

    .page-desc {
      font-family: 'Space Mono', monospace;
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5rem;
      gap: 1.5rem;
      color: var(--text-muted);
      font-family: 'Space Mono', monospace;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .albums-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1px;
      background: var(--border);
    }

    .album-card {
      background: var(--surface);
      padding: 1.5rem;
      cursor: pointer;
      transition: background 0.2s ease;
      animation: fadeUp 0.4s ease both;
      position: relative;
    }

    .album-card:hover {
      background: rgba(255, 200, 80, 0.05);
    }

    .album-id {
      font-family: 'Space Mono', monospace;
      font-size: 0.65rem;
      color: var(--accent);
      letter-spacing: 0.1em;
      margin-bottom: 0.6rem;
    }

    .album-title {
      font-size: 0.92rem;
      color: var(--text);
      line-height: 1.5;
      margin-bottom: 0.75rem;
      text-transform: capitalize;
    }

    .album-meta {
      font-family: 'Space Mono', monospace;
      font-size: 0.65rem;
      color: var(--text-muted);
      letter-spacing: 0.08em;
      margin-bottom: 1.25rem;
    }

    .album-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .btn-view {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      color: var(--accent);
      background: none;
      border: 1px solid rgba(255, 200, 80, 0.3);
      padding: 0.3rem 0.75rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn-view:hover {
      background: var(--accent);
      color: #000;
    }

    .btn-delete {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      color: #ff6b6b;
      background: none;
      border: 1px solid rgba(255, 107, 107, 0.3);
      padding: 0.3rem 0.6rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn-delete:hover:not(:disabled) {
      background: #ff6b6b;
      color: #000;
    }

    .btn-delete:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .empty {
      text-align: center;
      padding: 5rem;
      color: var(--text-muted);
      font-family: 'Space Mono', monospace;
      font-size: 0.85rem;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  deletingId: number | null = null;

  constructor(private albumService: AlbumService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.deletingId = id;
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
        this.deletingId = null;
        this.cdr.detectChanges();
      },
      error: () => {
        this.deletingId = null;
        this.cdr.detectChanges();
      }
    });
  }
}
