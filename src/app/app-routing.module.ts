import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './usuarios/listaUsuario/listaUsuario.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';


const routes: Routes = [
  { path: 'home', component: ListaUsuarioComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: '**', redirectTo: 'home' }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
