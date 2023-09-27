import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const datosUsuario = route.queryParams['datosUsuario'];

      if (datosUsuario && (datosUsuario.startsWith('pasajero') || datosUsuario.startsWith('conductor'))) {
        return true;
      } else {
        this.router.navigate(['/login-general']);
        return false;
      }
  } 
}
