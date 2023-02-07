import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './listaUsuario/listaUsuario.component';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaUsuarioComponent, UsuarioComponent],
  exports: [
    ListaUsuarioComponent, UsuarioComponent
  ]

})
export class UsuriousModule { }
