import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../usuario.service'; // Importa el servicio

@Component({
  selector: 'app-login-pasajero',
  templateUrl: './login-pasajero.page.html',
  styleUrls: ['./login-pasajero.page.scss'],
})
export class LoginPasajeroPage implements OnInit {

  usuario: string = '';
  password: string = '';  

  constructor(
    private router: Router, 
    private alertController: AlertController,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  async login() {
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.password);
    console.log('Intentando iniciar sesión con Usuario:', this.usuario);
  
    this.userService.obtenerNombreUsuarioServicio(this.usuario).subscribe({
      next: (data: any) => {
        if (data && data.length > 0 && data[0].contrasena === this.password) {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/home'], { queryParams: { datosUsuario: this.usuario } });
        } else {
          console.log('Respuesta del servicio:', data);
          console.log('Contraseña del servicio:', data[0].contrasena);
          console.log('Contraseña ingresada:', this.password);

          console.log('Credenciales incorrectas');
          this.mostrarAlerta('Credenciales incorrectas. Inténtelo nuevamente.');
        }
      },
      error: (error: any) => {
        console.error('Error al obtener el usuario:', error);
        if (error.status === 404) {
          this.mostrarAlerta('Usuario no encontrado. Por favor, registre una cuenta o verifique el nombre de usuario ingresado.');
        } else {
          this.mostrarAlerta('Error al iniciar sesión. Por favor, intente nuevamente más tarde.');
        }
      }
    });
}

async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error de inicio de sesión',
      message: mensaje,
      buttons: ['Aceptar'],
    });
    await alert.present();
}
  
  async registrar() {
    this.router.navigate(['/registro']);
  }
}
