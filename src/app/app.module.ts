import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { CiclosComponent } from './componentes/conteudo/ciclos/ciclos.component';
import { UnidadeDeNegocioComponent } from './componentes/conteudo/unidade-de-negocio/unidade-de-negocio.component';
import { FrntEstrategicaComponent } from './componentes/conteudo/frnt-estrategica/frnt-estrategica.component';
import { DetlhFrntEstrategicaComponent } from './componentes/conteudo/detlh-frnt-estrategica/detlh-frnt-estrategica.component';
import { IndexComponent } from './componentes/conteudo/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ConteudoComponent,
    CiclosComponent,
    UnidadeDeNegocioComponent,
    FrntEstrategicaComponent,
    DetlhFrntEstrategicaComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
