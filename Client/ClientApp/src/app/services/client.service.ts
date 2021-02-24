import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IClient, Client } from "../models/client.model";

import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  baseUrl: string;

  header = new HttpHeaders()
    .set('Content-type', 'application/json');

  constructor(private http: HttpClient, @Inject('BASE_URL') baseurl: string) {
    this.baseUrl = baseurl;
  }

  get(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.baseUrl + 'api/Client', { headers: this.header });
  }

  getById(id: number): Observable<IClient> {
    return this.http.get<IClient>(this.baseUrl + `api/Client/${id}`, { headers: this.header });
  }

  post(client: IClient): Observable<IClient> {
    
    let body = JSON.stringify(
      {
        Nombre: client.nombre,
        Apellido: client.apellido,
        Telefono: client.telefono
      }
    );
    
    return this.http.post<IClient>(this.baseUrl + 'api/Client', body, {headers: this.header});
  }

  put(client: IClient): Observable<IClient> {
    let body = JSON.stringify(
      {
        Id: client.id,
        Nombre: client.nombre,
        Apellido: client.apellido,
        Telefono: client.telefono
      }
    );
    return this.http.put<IClient>(this.baseUrl + `api/Client/${client.id}`, body, {headers: this.header});
  }

  delete(id: number): Observable<IClient> {
    return this.http.delete<IClient>(this.baseUrl + `api/Client/${id}`, { headers: this.header });
  }
}
