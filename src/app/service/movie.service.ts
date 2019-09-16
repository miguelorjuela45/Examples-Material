import { Injectable } from '@angular/core';
import { Movie } from '../dto/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {name: 'La isla siniestra', year: 2010, person:'la isla'},
    {name: 'Perdida', year: 2014, person:' la chica que se pierde'},
    {name: 'The number 23', year: 2007, person:'el que sigue despues del 22'},
    {name: 'El Origen', year: 2010, person:'el ganador del oscar'},
    {name: 'El maquinista', year: 2004, person:'el que hace de batman'}
  ];

  constructor() { }

  getMovies() {
    return this.movies;
  }
}
