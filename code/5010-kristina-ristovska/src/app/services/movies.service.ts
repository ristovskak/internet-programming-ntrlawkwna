import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ApiUrl } from '../shared/global-variables';
import { Movies } from '../models/movies.model';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private httpClient = inject(HttpClient);
  private baseUrl = ApiUrl.apiUrl;

  getAllMovies() {
    return this.httpClient
      .get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(catchError((error) => throwError(() => new Error(error))));
  }

  getMovieById(id: number) {
    return this.httpClient
      .get<Movies[]>(`${this.baseUrl}/movies?id=${id}`)
      .pipe(catchError((error) => throwError(() => new Error(error))));
  }
}
