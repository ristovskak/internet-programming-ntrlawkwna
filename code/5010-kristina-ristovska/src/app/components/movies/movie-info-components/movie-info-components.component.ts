import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { Movies } from '../../../models/movies.model';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-info-components',
  imports: [],
  templateUrl: './movie-info-components.component.html',
  styleUrl: './movie-info-components.component.css',
})
export class MovieInfoComponentsComponent implements OnInit {
  id: number = 0;
  title: string = '';
  year : number = 0;
  director: string = '';
  genre: string[] = [];
  oscars: string = '';
  rating: number = 0;
  plot: string = '';
  private movieService = inject(MoviesService);
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
    private router = inject(Router);

  movies: Movies[] = [];
  ngOnInit(): void {
    this.getMovieById(this.id);
  }

  close(){


     this.router.navigate(['/movies']);
  }

  getMovieById(id: number) {
    const subscription = this.movieService.getMovieById(id).subscribe({
      next: (data) => {
        console.log('Fetched Data:', data);
        this.movies = data;
        this.movies.map((i) => {
          this.title = i.title;
          this.year = i.year;
          this.director = i.director;
          this.rating = i.rating;
          this.genre = i.genre;
          this.plot = i.plot
        });
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
