import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login-general');
    }, 5000); // Tiempo (en milisegundos) que demora en cargar la página siguiente
  }
}