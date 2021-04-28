import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SemanaComponent } from './semana/semana.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Semana2Component } from './semana2/semana2.component';
import { Semana3Component } from './semana3/semana3.component';
import { Semana4Component } from './semana4/semana4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SemanaComponent,
    FormularioComponent,
    Semana2Component,
    Semana3Component,
    Semana4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
