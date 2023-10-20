import { Injectable } from '@angular/core';
import { IRegistro } from './registro/interface/IRegistro';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  private baseUrl: string = "http://localhost:3000";


  constructor(private http: HttpClient) {}

  registrarServicio(reg: IRegistro): Observable<IRegistro>{
    console.log("Registrando (Servicio)...", reg)
    const stUrl = `${ this.baseUrl }/personas`
    return this.http.post<IRegistro>(stUrl, reg);
    //.subscribe( persona => {console.log("Recibo Service", persona)});
  }

  actualizarServicio(id: String, registro: IRegistro): Observable<IRegistro>{
    console.log("Actualizando (Servicio)...", registro)
    const stUrl = `${ this.baseUrl }/personas`;
    return this.http.put<IRegistro>(stUrl, registro);
  }

  obtenerNombreUsuarioServicio(nombreUsuario: string): Observable<IRegistro> {
    console.log("Obteniendo Nombre de Usuario (Servicio)...", nombreUsuario)
    const stUrl = `${ this.baseUrl }/personas?nombreUsuario${ nombreUsuario }`;
    return this.http.get<IRegistro>(stUrl); 
  }

  eliminarServicio(){}


}