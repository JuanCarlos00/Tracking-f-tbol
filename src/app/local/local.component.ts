import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  jugadores:object[] = [
    {nombre:"1 Ter Stegen (P)",goles: 0,tarjetas:0,imagen: "assets/FCB/TerStegen.png"},
    {nombre:"18 Jordi Alba",goles: 0,tarjetas:0, imagen: "assets/FCB/Alba.png"},
    {nombre:"23 Samuel Umtiti",goles: 0,tarjetas:0, imagen: "assets/FCB/Umtiti.png"},
    {nombre:"3 Gerard Piqué",goles: 0,tarjetas:0, imagen: "assets/FCB/Pique.png"},
    {nombre:"20 Sergi Roberto",goles:0,tarjetas:0, imagen: "assets/FCB/Roberto.png"},
    {nombre:"5 Sergio Busquets",goles:0,tarjetas:0, imagen: "assets/FCB/Busquets.png"},
    {nombre:"4 Iván Rakitic",goles:0,tarjetas:0, imagen: "assets/FCB/Rakitic.png"},
    {nombre:"8 Andrés Iniesta",goles:0,tarjetas:0, imagen: "assets/FCB/Iniesta.png"},
    {nombre:"14 Philippe Coutinho",goles:0,tarjetas:0, imagen: "assets/FCB/Coutinho.png"},
    {nombre:"10 Leo Messi",goles:0,tarjetas:0, imagen: "assets/FCB/Messi.png"},
    {nombre:"9 Luís Suárez",goles:0,tarjetas:0, imagen: "assets/FCB/Suarez.png"},
  ]

  goles:number = 0
  tarjetas:number = 0
  dobleDigito:string = "0"
  tarjCont:string = "0"

  constructor() { }

  ngOnInit() {
  }

  recibeGoles(event){
    this.goles = this.goles + event
    if (this.goles >= 10){
      this.dobleDigito = ("0" + this.goles).slice(-2)
    } else {
    this.dobleDigito = ("0" + this.goles).slice(-1)
    }
  }
  recibeTarjetas(event){
    this.tarjetas = this.tarjetas + event
    if (this.tarjetas >= 10){
      this.tarjCont = ("0" + this.tarjetas).slice(-2)
    } else {
    this.tarjCont = ("0" + this.tarjetas).slice(-1)
    }
  }


}
