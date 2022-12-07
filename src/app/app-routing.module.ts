import { IndexComponent } from './componentes/conteudo/index/index.component';
import { DetlhFrntEstrategicaComponent } from './componentes/conteudo/detlh-frnt-estrategica/detlh-frnt-estrategica.component';
import { FrntEstrategicaComponent } from './componentes/conteudo/frnt-estrategica/frnt-estrategica.component';
import { UnidadeDeNegocioComponent } from './componentes/conteudo/unidade-de-negocio/unidade-de-negocio.component';
import { CiclosComponent } from './componentes/conteudo/ciclos/ciclos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'IndexComponent',
    pathMatch: 'full'
  },

  {
    path: 'ciclos',
    component: CiclosComponent
  },

  {
    path: 'und-negocios',
    component: UnidadeDeNegocioComponent
  },

  {
    path: 'frnt-estrategica',
    component: FrntEstrategicaComponent
  },

  {
    path: 'detlh-frnt-estrategica',
    component: DetlhFrntEstrategicaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
