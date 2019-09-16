import { Injectable } from '@angular/core';
import { Teacher } from '../dto/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  teachers: Teacher[] = [
    {name: 'Oscar', class: 'Ambientes web'},
    {name: 'Fernando', class: 'Redes'},
    {name: 'Roncancio', class: 'Aplicada'},
    {name: 'Abdul', class: 'Software'},
    {name: 'Ernesto', class: 'Economica'}
  ];
  
  constructor() { 
  }

  getTeacher(){
    return this.teachers;
  }
}
