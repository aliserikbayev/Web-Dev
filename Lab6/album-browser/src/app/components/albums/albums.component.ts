import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  template: `
    <div class="page">
      <h1>Albums</h1>

      <div *ngIf="albums$ | async as albums; else loading">
        <div *ngIf="albums.length === 0" class="empty">No albums found.</div>

        <ul class="album-list">
          <li *ngFor="let album of albums" class="album-item">
            <span class="album-title" (click)="goToAlbum(album.id)">
              {{ album.id }}. {{ album.title }}
            </span>
            <button class="btn-delete" (click)="deleteAlbum(album.id)" [disabled]="deletingId === album.id">
              {{ deletingId === album.id ? 'Deleting...' : 'Delete' }}
            </button>
          </li>
        </ul>
      </div>

      <ng-template #loading>
        <div class="loading">Loading albums...</div>
      </ng-template>
    </div>
  `,
  styles: [`
    .page { max-width: 800px; margin: 40px auto; padding: 0 16px; }
    h1 { margin-bottom: 20px; }
    .loading, .empty { color: #666; padding: 20px 0; }
    .album-list { list-style: none; }
    .album-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      border-bottom: 1px solid #ddd;
    }
    .album-item:hover { background: #f0f0f0; }
    .album-title { cursor: pointer; color: #3f51b5; flex: 1; }
    .album-title:hover { text-decoration: underline; }
    .btn-delete {
      padding: 4px 10px;
      background: #e53935;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
    }
    .btn-delete:hover:not(:disabled) { background: #c62828; }
    .btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[] | null>;
  deletingId: number | null = null;

  constructor(private albumService: AlbumService, private router: Router) {
    this.albums$ = this.albumService.albums$;
  }

  ngOnInit(): void {
    this.albumService.loadAlbums();
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    this.deletingId = id;
    this.albumService.deleteAlbum(id).subscribe({
      next: () => this.deletingId = null,
      error: () => this.deletingId = null
    });
  }
}
