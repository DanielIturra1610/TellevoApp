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
    // Espera 4 segundos (tiempo total del splash screen) y luego muestra el spinner
    setTimeout(() => {
      const splashScreen = document.getElementById('splashScreen');
      const spinner = document.getElementById('spinner');

      if (splashScreen) {
        splashScreen.style.display = 'none';
      }
      if (spinner) {
        spinner.style.display = 'flex';
      }

      // Oculta el spinner después de 2 segundos
      setTimeout(() => {
        if (spinner) {
          spinner.style.display = 'none';
        }
        // Aquí puedes agregar código para navegar a otra página si lo deseas
        this.navCtrl.navigateForward('/login-general');

      }, 2000);

    }, 4000);
  }
}
