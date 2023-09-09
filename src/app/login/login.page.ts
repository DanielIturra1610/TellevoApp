import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuarios: { [key: string]: { password: string } } = {
    pasajero1: { password: '123abc1' },
    pasajero2: { password: '123abc2' },
    pasajero3: { password: '123abc3' },
    conductor1: { password: '456def1' },
    conductor2: { password: '456def2' },
  }

  perfil: 'pasajero' | 'conductor' = 'pasajero';
  usuario: string = '';
  password: string = '';
  msjError: string | null = null;

  constructor(private router: Router) { }

  setPerfil(nuevoPerfil: 'pasajero' | 'conductor') {
    this.perfil = nuevoPerfil;
    this.usuario = '';
    this.password = '';
    this.msjError = '';
  }

  async login() {
    if (!this.usuario || !this.password) {
      this.msjError = 'Por favor, complete todos los campos.';
      return;
    }

    const datosUsuario = this.usuarios[this.perfil + this.usuario];

    if (datosUsuario && datosUsuario.password === this.password) {
      this.msjError = 'Inicio de sesión exitoso.';
      this.router.navigate(['/home', { datosUsuario: this.usuario }]);
    } else {
      this.msjError = 'Las credenciales no son válidas. Inténtelo nuevamente.';
      console.log(this.usuario, this.password);
    }
  }
}