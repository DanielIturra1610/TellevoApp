import { Component, OnInit } from '@angular/core';

import { UserService } from '../usuario.service';
import { IRegistro } from './interface/IRegistro';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registro: IRegistro = {
    nombreUsuario: "",
    nombres: "",
    apellidos: "",
    edad: 0,
    correo: "",
    contrasena: "",
    conductor: ""  }

  constructor(private userServ: UserService,
              private alertController: AlertController,
              private navCtrl: NavController) {}

  ngOnInit() {
  }

  async registrar() {
    if (!this.registro.nombreUsuario || !this.registro.nombres || !this.registro.apellidos || !this.registro.edad || !this.registro.correo || !this.registro.contrasena || !this.registro.conductor) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Todos los datos son obligatorios.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    console.log("Registrando...")
    this.userServ.registrarServicio(this.registro)
    .subscribe( async persona => {console.log("ReciboPage", persona);
      const alert = await this.alertController.create({
        header: 'Registro',
        message: 'Usuario registrado',
        buttons: ['OK']
      });
      await alert.present();

      setTimeout(() => {
        this.navCtrl.navigateForward('/home');
      }, 3000);
      })
  }

  async mostrarPosts(){
    this.userServ.getPosts().subscribe({
      next: (res: any[]) => {
        console.log(res[0]);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
