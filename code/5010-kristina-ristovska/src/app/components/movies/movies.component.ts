import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../../models/movies.model';
import { MovieCardComponent } from './movie-card/movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [MovieCardComponent, FormsModule, NgFor, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  private movieService = inject(MoviesService);
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  movies: Movies[] = [];
  ngOnInit(): void {
    this.getMovies();
  }

  openInfo(id: number) {
    this.router.navigate(['/movies/', id]);
  }

  getMovies() {
    const subscription = this.movieService.getAllMovies().subscribe({
      next: (data) => {
        console.log('Fetched Data:', data);
        this.movies = data;
        console.log('Assigned Items:', this.movies);
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
