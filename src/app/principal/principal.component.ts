import { Component, OnInit } from '@angular/core';
import { Colores } from '../dto/datos';
import { AutocompleteService } from '../service/autocomplete.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  displayedColumns: string[] = ['color'];
  Colores: Colores[];

  constructor(private autocompleteService: AutocompleteService) {
    this.Colores = this.autocompleteService.getColor();
   }

  ngOnInit() {
  }

}
