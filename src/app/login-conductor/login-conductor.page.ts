import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})
export class LoginConductorPage implements OnInit {

  usuarios: { [key: string]: string } = {
    conductor1: '456def1',
    conductor2: '456def2',
    conductor3: '456def3',
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
      this.router.navigate(['/home']);
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
}
