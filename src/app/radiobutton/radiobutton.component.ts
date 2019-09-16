import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {

  opciones:any = ["hombre","mujer","gato","perro"]
  constructor() { }

  ngOnInit() {
  }

}
