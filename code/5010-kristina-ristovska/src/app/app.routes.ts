import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieInfoComponentsComponent } from './components/movies/movie-info-components/movie-info-components.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MovieInfoComponentsComponent,
  },
];
