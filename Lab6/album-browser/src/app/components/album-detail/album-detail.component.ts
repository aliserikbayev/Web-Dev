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
    <div class="detail-page">
      <div class="detail-inner">
        <div class="breadcrumb">
          <button class="btn-back" (click)="goBack()">← Back to Albums</button>
        </div>

        <div *ngIf="loading" class="loading">
          <div class="spinner"></div>
          <span>Loading album…</span>
        </div>

        <div *ngIf="!loading && album" class="detail-content">
          <div class="album-badge">#{{ album.id.toString().padStart(3, '0') }}</div>
          <h1>{{ album.title }}</h1>

          <div class="meta-row">
            <span class="meta-label">User ID</span>
            <span class="meta-value">{{ album.userId }}</span>
          </div>

          <div class="edit-section">
            <div class="edit-label">[ EDIT TITLE ]</div>
            <div class="edit-row">
              <input
                type="text"
                [(ngModel)]="editTitle"
                class="edit-input"
                placeholder="Album title"
              />
              <button class="btn-save" (click)="saveAlbum()" [disabled]="saving">
                {{ saving ? 'Saving…' : 'Save' }}
              </button>
            </div>
            <div *ngIf="saveSuccess" class="save-success">✓ Saved successfully</div>
          </div>

          <div class="action-row">
            <a [routerLink]="['/albums', album.id, 'photos']" class="btn-photos">
              View Photos →
            </a>
          </div>
        </div>

        <div *ngIf="!loading && !album" class="not-found">
          Album not found.
        </div>
      </div>
    </div>
  `,
  styles: [`
    .detail-page {
      min-height: calc(100vh - 72px);
      padding: 3rem 2rem 4rem;
      display: flex;
      justify-content: center;
    }

    .detail-inner {
      max-width: 600px;
      width: 100%;
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
      margin-bottom: 2.5rem;
      display: block;
      transition: color 0.2s ease;
    }

    .btn-back:hover {
      color: var(--accent);
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

    .album-badge {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      color: var(--accent);
      margin-bottom: 0.75rem;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--text);
      margin: 0 0 2rem;
      line-height: 1.3;
      text-transform: capitalize;
    }

    .meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border);
      margin-bottom: 2.5rem;
    }

    .meta-label {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .meta-value {
      font-family: 'Space Mono', monospace;
      font-size: 0.85rem;
      color: var(--text);
    }

    .edit-section {
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 1.75rem;
      margin-bottom: 2rem;
    }

    .edit-label {
      font-family: 'Space Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      color: var(--accent);
      margin-bottom: 1rem;
    }

    .edit-row {
      display: flex;
      gap: 0.75rem;
    }

    .edit-input {
      flex: 1;
      padding: 0.7rem 1rem;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 0.9rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s ease;
    }

    .edit-input:focus {
      border-color: var(--accent);
    }

    .btn-save {
      padding: 0.7rem 1.5rem;
      background: var(--accent);
      color: #000;
      border: none;
      font-family: 'Space Mono', monospace;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .btn-save:hover:not(:disabled) {
      background: #fff;
    }

    .btn-save:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .save-success {
      margin-top: 0.75rem;
      font-family: 'Space Mono', monospace;
      font-size: 0.75rem;
      color: #7ee787;
      letter-spacing: 0.05em;
    }

    .action-row {
      display: flex;
      gap: 1rem;
    }

    .btn-photos {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.75rem;
      background: none;
      border: 1px solid var(--accent);
      color: var(--accent);
      font-family: 'Space Mono', monospace;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn-photos:hover {
      background: var(--accent);
      color: #000;
    }

    .not-found {
      text-align: center;
      padding: 5rem;
      color: var(--text-muted);
      font-family: 'Space Mono', monospace;
    }
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
