import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  usuarios = []

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {

    this._http.get('http://jsonplaceholder.typicode.com/users')
    .subscribe((datos: any[]) => this.usuarios = datos)

  }

  borrarUsuario(id: number) {
    //console.log(id)
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  }


}
