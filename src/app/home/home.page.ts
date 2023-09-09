import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtener el nombre de usuario del parámetro de la ruta
    this.route.queryParams.subscribe((params) => {
      this.usuario = params['datosUsuario'];
      this.esPasajero = this.usuario.startsWith('pasajero');
      this.esConductor = this.usuario.startsWith('conductor');
    });
  }

  irViajes() {
    this.router.navigate(['/viajes']);
  }
}
