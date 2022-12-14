import { RmrComponent } from './views/rmr/rmr.component';
import { DetalhamentoFrenteEstrategicaComponent } from './views/detalhamento-frente-estrategica/detalhamento-frente-estrategica.component';
import { FrenteEstrategicaComponent } from './views/frente-estrategica/frente-estrategica.component';
import { UnidadeNegocioComponent } from './views/unidade-negocio/unidade-negocio.component';
import { CiclosComponent } from './views/ciclos/ciclos.component';
import { HomeComponent } from './views/home/home.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: HomeComponent,

},
{
  path: "ciclos",
  component: CiclosComponent,
},

{
  path: "unidade-negocio",
  component: UnidadeNegocioComponent,
},
{
  path: "frente-estrategica",
  component: FrenteEstrategicaComponent,
},
{
  path: 'dtlh-frente-estrategica',
  component: DetalhamentoFrenteEstrategicaComponent,
},
{
  path: 'rmr',
  component: RmrComponent,
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
