import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Paginas } from '../models/paguinas.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url = 'https://reqres.in/api'
  constructor(private http: HttpClient) { }

  getUser(): Observable<Usuario[]> {
    const params = new HttpParams().append('per_page', 6)
    return this.http.get(`${this.url}/users`, { params }).pipe(
      map((paginas: any) => paginas?.data)
    );
  }
}
