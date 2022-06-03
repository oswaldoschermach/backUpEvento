
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosComponent } from './components/contatos/contatos.component';
import { EventoDetalheComponent } from './components/eventoDetalhe/eventoDetalhe.component';
import { EventoListaComponent } from './components/eventoLista/eventoLista.component';
import { PainelControleComponent } from './components/painelControle/painelControle.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  { path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  { path: 'eventos', redirectTo: 'eventos/lista' },
  {
    path: 'eventos', component: EventosComponent,
    children: [
      { path: 'detalhe', component: EventoDetalheComponent },
      { path: 'detalhe/:id', component: EventoDetalheComponent},
      { path: 'lista', component: EventoListaComponent }
    ]
  },
  { path: 'palestrantes', component: PalestrantesComponent },
  { path: 'painelControle', component: PainelControleComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contatos', component: ContatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
