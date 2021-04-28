import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import { SemanaComponent } from '../app/semana/semana.component';
import { FormularioComponent } from '../app/formulario/formulario.component'
import {Semana2Component} from '../app/semana2/semana2.component';
import { Semana3Component } from '../app/semana3/semana3.component';
import { Semana4Component } from '../app/semana4/semana4.component';

const routes: Routes = [
    {path:'home',component:HomeComponent}
    ,{path:'semana',component:SemanaComponent}
  , { path: 'semana2', component: Semana2Component }
  , { path: 'semana3', component: Semana3Component }
  , { path: 'semana4', component: Semana4Component }
    ,{path:'formulario',component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
