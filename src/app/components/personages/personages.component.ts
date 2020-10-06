import { Component, EventEmitter, Host, Input, Output } from '@angular/core';
import { TodayComponent } from '../today/today.component';

@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html',
  styleUrls: ['./personages.component.css']
})
export class PersonagesComponent{

  @Input('data') personages:  any 

  @Output() borrar = new EventEmitter<number>()

  constructor(
    //@Host() private _app: TodayComponent
  ) { 
    //console.log(this._app)
  }

  BorrarUsuario(id: number) {
    //console.log("id:", id)
    this.borrar.emit(id)
    //this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id)
  }

}
