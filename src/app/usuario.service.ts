import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuarios: { [key: string]: string } = {
    pasajero1: '123456',
    pasajero2: '123456',
    pasajero3: '123456',
    conductor1: '123456',
    conductor2: '123456',
    conductor3: '123456',
  };

  constructor() {}

  getUsuarios(): { [key: string]: string } {
    return this.usuarios;
  }

  actualizarContrasena(usuario: string, nuevaContrasena: string): void {
    if (this.usuarios.hasOwnProperty(usuario)) {
      this.usuarios[usuario] = nuevaContrasena;
    }
  }
}
