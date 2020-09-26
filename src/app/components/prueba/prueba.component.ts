import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desactivado = true
  tipo = 'submit'

  titulo: string = 'chula'

  log(titulo){
    console.log(titulo)
  }

  seleccion: string = ''

}
