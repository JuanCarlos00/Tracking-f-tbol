import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores-local',
  templateUrl: './jugadores-local.component.html',
  styleUrls: ['./jugadores-local.component.css']
})
export class JugadoresLocalComponent implements OnInit {

  @Input() jugadores
  @Output() gol = new EventEmitter()
  @Output() tarjeta = new EventEmitter()
  topPlayers

  constructor() { }

  ngOnInit() {
    this.topPlayers = this.jugadores.concat()
  }

  sumaGoles(n,p) {
    this.jugadores.forEach(jugador => {
      if( jugador.nombre === n ) {
        jugador.goles = jugador.goles + p
      }
    })
    this.ordenar()
  }

  sumaTarjetas(n,t) {
    this.jugadores.forEach(jugador => {
      if( jugador.nombre === n ) {
        jugador.tarjetas = jugador.tarjetas + t
      }
      if(jugador.tarjetas === 3){
        jugador.tarjetas = jugador.tarjetas - t
      }
    })
  }

  detectar(p){
    this.gol.emit(p)

  }

  detectar2(t){
    this.tarjeta.emit(t)
  }

  ordenar(){
    this.topPlayers = this.jugadores.concat()
    this.topPlayers.sort(function(a,b){
      return (b.goles - a.goles)
    })
  }

}
