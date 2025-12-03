import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElicitacaoComponent } from './elicitacao/elicitacao.component';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { PreRastreabilidadeComponent } from './pre-rastreabilidade/pre-rastreabilidade.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { EntregaFinalComponent } from './entrega-final/entrega-final.component';
import { SobreComponent } from './sobre/sobre.component';
import { ModelagemComponent } from './modelagem/modelagem.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'elicitacao', component: ElicitacaoComponent},
  {path: 'planejamento', component: PlanejamentoComponent},
  {path: 'pre-rastreabilidade', component: PreRastreabilidadeComponent},
  {path: 'modelagem', component: ModelagemComponent},
  {path: 'termos-de-uso', component: TermosDeUsoComponent},
  {path: 'entrega-final', component: EntregaFinalComponent},
  {path: 'sobre', component: SobreComponent},  
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
