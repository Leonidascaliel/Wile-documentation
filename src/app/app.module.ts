import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ElicitacaoComponent } from './elicitacao/elicitacao.component';
import { HomeComponent } from './home/home.component';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { EntregaFinalComponent } from './entrega-final/entrega-final.component';
import { ModelagemComponent } from './modelagem/modelagem.component';
import { PreRastreabilidadeComponent } from './pre-rastreabilidade/pre-rastreabilidade.component';
import { SobreComponent } from './sobre/sobre.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ElicitacaoComponent,
    HomeComponent,
    PlanejamentoComponent,
    EntregaFinalComponent,
    ModelagemComponent,
    PreRastreabilidadeComponent,
    SobreComponent,
    TermosDeUsoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
