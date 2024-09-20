import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from '../domain/evento';
import { TipoEvento } from '../domain/tipo-evento';

@Injectable()
export class EventoService {

  url = `${environment.apiUrl}/eventos`;
  url2 = `${environment.apiUrl}/tiposeventos`;

  constructor(private http: HttpClient) { }

  encontrarEventoPorId(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.url}/${id}`);
  }

  buscarTodosEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.url}`);
  }

  buscarTodosTipoEvento(): Observable<TipoEvento[]> {
    return this.http.get<TipoEvento[]>(`${this.url2}`);
  }

  salvarEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.url, evento);
  }

  editarEvento(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(this.url, evento);
  }

  deletarEvento(id: number): Observable<any> {
    return this.http.delete<Evento>(`${this.url}/${id}`);
  }
}
