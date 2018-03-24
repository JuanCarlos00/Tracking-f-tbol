import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores-visitante',
  templateUrl: './jugadores-visitante.component.html',
  styleUrls: ['./jugadores-visitante.component.css']
})
export class JugadoresVisitanteComponent implements OnInit {

  @Input() jugadores
  @Output() canasta = new EventEmitter()
  topPlayers

  constructor() { }

  ngOnInit() {
    this.topPlayers = this.jugadores.concat()
  }

  sumaPuntos(n,p) {
    this.jugadores.forEach(jugador => {
      if( jugador.nombre === n ) {
        jugador.puntos = jugador.puntos + p
      }
    })
    this.ordenar()
  }

  detectar(p){
    this.canasta.emit(p)
  }

  ordenar(){
    this.topPlayers = this.jugadores.concat()
    this.topPlayers.sort(function(a,b){
      return (b.puntos - a.puntos)
    })
  }

}
