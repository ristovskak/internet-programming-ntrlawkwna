import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  id = input();
  title = input('');
  year = input();
  director = input('');
  genre = input('');
  oscars = input('');
  rating = input();
  @Output() recipeInfo = new EventEmitter<{ id: string }>();
}
