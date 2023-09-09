import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../usuario.service';

@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.page.html',
  styleUrls: ['./pass-recovery.page.scss'],
})
export class PassRecoveryPage {
  usuario: string = '';
  nuevoPassword: string = '';
  confirmaPassword: string = '';
  error: string | null = null;

  usuarios: { [key: string]: string } = {
    pasajero1: '123456',
    pasajero2: '123456',
    pasajero3: '123456',
    conductor1: '123456',
    conductor2: '123456',
    conductor3: '123456',

    /* Agrega más usuarios si es necesario */
  };

  constructor(private navCtrl: NavController, private usuarioService: UserService) {}

  restablecePass() {
    
    if (!this.usuario || !this.nuevoPassword || !this.confirmaPassword) {
      this.error = 'Por favor, complete todos los campos.';
      return;
    }
    /* Validamos contraseña */
    if (this.nuevoPassword !== this.confirmaPassword) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }
    const usuarios = this.usuarioService.getUsuarios()

    /* Verificamos la existencia del usuario */
    if (this.usuarios.hasOwnProperty(this.usuario)) {
      /* Actualizamos su contraseña */
      this.usuarioService.actualizarContrasena(this.usuario, this.nuevoPassword);

      /*Mostramos un mensaje de cambio efectuado correctamente, o no */
      this.error = 'Contraseña restablecida con éxito.';
      this.navCtrl.navigateRoot('/login-general');
    } else {
      this.error = 'El usuario no existe.';
    }
  }
}