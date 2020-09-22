import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    console.log('Componente Header Creandose')
  }

  ngOnInit(): void {
    console.log('Componente HEADER Creado')
  }
/*
  nombre = "Alejandra"

  cambiarNombre(){
    this.nombre = "Carolina"
  }
*/

contador = 0

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

add(){
  this.arr.push(Math.random()*200)
}
 
suma() {
  this.contador++
}

}
