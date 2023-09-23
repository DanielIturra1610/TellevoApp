import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPasajeroPageRoutingModule } from '../login-pasajero/login-pasajero-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  informacionPersonal: { [key: string]: { nombre: string, edad: number, correo: string } } = {
    pasajero1: { nombre: 'Gastón Barrientos', edad: 25, correo: 'correo1@example.com' },
    pasajero2: { nombre: 'José Urrutia', edad: 30, correo: 'correo2@example.com' },
    conductor1: { nombre: 'Gabriela Méndez', edad: 35, correo: 'correo3@example.com' },
    conductor2: { nombre: 'Pablo Pavez', edad: 40, correo: 'correo4@example.com' },
  };

  usuario: string = '';
  esPasajero: boolean = false;
  esConductor: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('Se cargó el constructor');
  }

    

  ngOnInit() {
    
    this.route.queryParams.subscribe((params) => {
      this.usuario = params['datosUsuario'];
      this.esPasajero = this.usuario.startsWith('pasajero');
      this.esConductor = this.usuario.startsWith('conductor');
      console.log('Se cargó ngOnInit')
    });
  }

  ionViewWillEnter(){
    console.log('Se cargó ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('Se cargó ionViewDidEnter')
  }

  ionViewWillLeave(){
    console.log("Se cargó ionViewWillLeave")
  }

  ionViewDidLeave(){
    console.log("Se cargó ionViewDidLeave");
  }

  ngOnDestroy(){
    console.log("Se cargó ngOnDestroy");
  }

  irViajes() {
    this.router.navigate(['/viajes']);
  }
}
