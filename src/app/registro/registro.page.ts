import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DatabaseService } from 'src/assets/database.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: string = '';
  nombre: string = '';
  edad: number = 0;
  correo: string = '';
  password: string = '';
  conductor: boolean = false;

  constructor(private databaseService: DatabaseService, route: ActivatedRoute, router: Router) {}

  ngOnInit() {
    this.databaseService.crearBD();
  }

  async registrar() {
    const usuario = {
      usuario: this.usuario,
      nombre: this.nombre,
      edad: this.edad,
      correo: this.correo,
      password: this.password,
      conductor: this.conductor
    };

    try {
      await this.databaseService.crearUsuario(usuario);
      console.log("Usuario registrado exitosamente");
      
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      
    }
  }
}

