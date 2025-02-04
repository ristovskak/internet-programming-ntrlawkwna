export interface Movies {
  id: number;
  title: string;
  year: number; // the year the movie was released
  director: string; // the name of the director
  genre: string[]; // an array of strings, each string is the a distinct genre
  plot: string; // a short description of the plot
  cast: [
    {
      actor: string; // the name of the actor
      character: string; // the name of the character played by the actor
    }
  ]; // an array of cast objects,
  oscars: {
    '<oscar-type>': string;
    // ...
    // where <oscar-type> is the type of the oscar won
    // and the value is the recipient of the oscar
  };
  rating: number;
}

