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
    <div class="page">
      <button class="btn-back" (click)="goBack()">← Back to Album</button>

      <h1>Photos for Album #{{ albumId }}</h1>

      <div *ngIf="loading">Loading photos...</div>

      <div *ngIf="!loading && photos.length === 0">No photos found.</div>

      <div *ngIf="!loading" class="photo-grid">
        <div *ngFor="let photo of photos" class="photo-item">
          <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
          <p>{{ photo.title }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page { max-width: 900px; margin: 40px auto; padding: 0 16px; }
    .btn-back {
      background: none; border: none; color: #3f51b5;
      cursor: pointer; font-size: 0.95rem; margin-bottom: 20px; padding: 0;
    }
    .btn-back:hover { text-decoration: underline; }
    h1 { margin-bottom: 20px; }
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 16px;
    }
    .photo-item {
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      background: white;
    }
    .photo-item img {
      width: 100%;
      display: block;
    }
    .photo-item p {
      padding: 6px 8px;
      font-size: 0.75rem;
      color: #555;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
