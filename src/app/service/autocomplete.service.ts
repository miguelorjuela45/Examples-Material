import { Injectable } from '@angular/core';
import { Colores } from '../dto/datos';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  colores: Colores[] = [
    {color: 'azul'},
    {color: 'amarillo'},
    {color: 'verde'},
    {color: 'naranja'},
    {color: 'rojo'},
    {color: 'blanco'},
  ]
  constructor() { }

  getColor() {
    return this.colores;
  }
}
