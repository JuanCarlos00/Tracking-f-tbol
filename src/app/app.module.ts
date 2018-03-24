import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { JugadoresLocalComponent } from './jugadores-local/jugadores-local.component';
import { VisitanteComponent } from './visitante/visitante.component';
import { JugadoresVisitanteComponent } from './jugadores-visitante/jugadores-visitante.component';


@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    JugadoresLocalComponent,
    VisitanteComponent,
    JugadoresVisitanteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
