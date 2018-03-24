import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {

  jugadores:object[] = [
    {nombre:"1 Manuel Neuer",puntos: 0, imagen: "assets/BAY/Neuer.png"},
    {nombre:"27 David Alaba",puntos: 0, imagen: "assets/BAY/Alaba.png"},
    {nombre:"5 Mats Hummels",puntos: 0, imagen: "assets/BAY/Hummels.png"},
    {nombre:"17 Jérôme Boateng",puntos: 0, imagen: "assets/BAY/Boateng.png"},
    {nombre:"13 Rafinha",puntos:0, imagen: "assets/BAY/Rafinha.png"},
    {nombre:"8 Javi Martínez",puntos:0, imagen: "assets/BAY/Martinez.png"},
    {nombre:"6 Tiago Alcántara",puntos:0, imagen: "assets/BAY/Tiago.png"},
    {nombre:"23 Arturo Vidal",puntos:0, imagen: "assets/BAY/Vidal.png"},
    {nombre:"25 Thomas Müller",puntos:0, imagen: "assets/BAY/Muller.png"},
    {nombre:"10 Arjen Robben",puntos:0, imagen: "assets/BAY/Robben.png"},
    {nombre:"9 Robert Lewandowski",puntos:0, imagen: "assets/BAY/Lewandowski.png"},
  ]

  puntos:number = 0
  dobleDigito:string = "0"

  constructor() { }

  ngOnInit() {
  }

  recibePuntos(event){
    this.puntos = this.puntos + event
    if (this.puntos >= 100){
      this.dobleDigito = ("0" + this.puntos).slice(-3)
    } else {
    this.dobleDigito = ("0" + this.puntos).slice(-2)
    }
  }

}
