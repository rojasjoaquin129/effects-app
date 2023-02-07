import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-listaUsuario',
  templateUrl: './listaUsuario.component.html',
  styleUrls: ['./listaUsuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = []
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUser().subscribe(data => this.usuarios = data)
  }

}
