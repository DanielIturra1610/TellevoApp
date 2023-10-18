import { Injectable } from '@angular/core';
import { IRegistro } from './registro/interface/IRegistro';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
    })
  }

  apiURL = 'https://jsonplaceholder.typicode.com'
  private baseUrl: string = "http://localhost:3000";


  constructor(private http: HttpClient) {}

  registrarServicio(reg: IRegistro): Observable<IRegistro>{
    console.log("Registrando (Servicio)...", reg)
    const stUrl = `${ this.baseUrl }/personas`
    return this.http.post<IRegistro>(stUrl, reg);
    //.subscribe( persona => {console.log("Recibo Service", persona)});
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3),
      catchError(this.handleError)      
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(`El servidor retornó el código ${error.status}, ` + `cuerpo: ${error.error}`);
    }
    return throwError('Algo malo ocurrió; por favor, inténtalo de nuevo más tarde.');
  }

  getPost(id: any): Observable<any> {
    return this.http.get(this.apiURL+'/posts/'+id).pipe(
      retry(3),
      catchError(this.handleError)
    ); 
  }

  createPost(post: any):Observable<any>{
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  updatePost(id: any,post: any):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).
      pipe(retry(3),
      catchError(this.handleError)
    );
  }

  deletePost(id: any):Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }
}
