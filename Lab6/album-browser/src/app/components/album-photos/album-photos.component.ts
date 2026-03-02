import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="photos-page">
      <div class="photos-header">
        <button class="btn-back" (click)="goBack()">← Back to Album</button>
        <div class="page-label">[ PHOTOS ]</div>
        <h1>Album #{{ albumId }}</h1>
        <p class="photo-count" *ngIf="!loading">{{ photos.length }} photos</p>
      </div>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <span>Loading photos…</span>
      </div>

      <div *ngIf="!loading" class="photos-grid">
        <div
          *ngFor="let photo of photos; let i = index"
          class="photo-item"
          [style.animation-delay]="(i % 30) * 0.02 + 's'"
        >
          <img [src]="photo.thumbnailUrl" [alt]="photo.title" loading="lazy" />
          <div class="photo-overlay">
            <span class="photo-title">{{ photo.title }}</span>
          </div>
        </div>
      </div>

      <div *ngIf="!loading && photos.length === 0" class="empty">
        No photos found for this album.
      </div>
    </div>
  `,
  styles: [`
    .photos-page {
      min-height: calc(100vh - 72px);
      padding: 0 0 4rem;
    }

    .photos-header {
      padding: 3rem 2rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      animation: fadeUp 0.5s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .btn-back {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-bottom: 1.5rem;
      display: block;
      transition: color 0.2s ease;
    }

    .btn-back:hover {
      color: var(--accent);
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
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 0.5rem;
    }

    .photo-count {
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      color: var(--text-muted);
      letter-spacing: 0.08em;
      margin-bottom: 1.5rem;
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
      width: 36px;
      height: 36px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 2px;
      padding: 0 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .photo-item {
      position: relative;
      aspect-ratio: 1;
      overflow: hidden;
      background: var(--surface);
      cursor: pointer;
      animation: fadeUp 0.4s ease both;
    }

    .photo-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }

    .photo-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .photo-item:hover .photo-overlay {
      opacity: 1;
    }

    .photo-item:hover img {
      transform: scale(1.05);
    }

    .photo-title {
      font-size: 0.72rem;
      color: #fff;
      text-align: center;
      line-height: 1.4;
      font-family: 'Space Mono', monospace;
      letter-spacing: 0.04em;
    }

    .empty {
      text-align: center;
      padding: 5rem;
      color: var(--text-muted);
      font-family: 'Space Mono', monospace;
      font-size: 0.85rem;
    }

    @media (max-width: 600px) {
      .photos-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      }
    }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
