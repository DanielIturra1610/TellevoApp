import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-pasajero',
  templateUrl: './login-pasajero.page.html',
  styleUrls: ['./login-pasajero.page.scss'],
})
export class LoginPasajeroPage implements OnInit {

  usuarios: { [key: string]: string } = {
    pasajero1: '123abc1',
    pasajero2: '123abc2',
    pasajero3: '123abc3',
  };

  usuario: string = '';
  password: string = '';  

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async login() {
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.password);
  
    const contraseñaCorrecta = this.usuarios[this.usuario];
    console.log('Contraseña correcta:', contraseñaCorrecta);
  
    if (contraseñaCorrecta && contraseñaCorrecta === this.password) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/home'], { queryParams: { datosUsuario: this.usuario } });
    } else {
      console.log('Credenciales incorrectas');
      const alert = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message: 'Las credenciales no son válidas. Inténtelo nuevamente.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
  
  async registrar() {
    this.router.navigate(['/registro']);
  }
}
