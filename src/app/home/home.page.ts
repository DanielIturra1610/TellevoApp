import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../usuario.service';

import data from 'src/assets/database/database.json'
import { IRegistro } from '../registro/interface/IRegistro';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  registro: IRegistro = {
    nombreUsuario: "",
    nombres: "",
    apellidos: "",
    edad: 0,
    correo: "",
    contrasena: "",
    conductor: ""  }

  id = ""
  

  constructor(private route: ActivatedRoute, private router: Router, private userServ: UserService) {
    console.log('Se cargó el constructor');

    /* this.userServ.getPosts().subscribe({
      next: (res: any[]) => {
        console.log(res[0]);
      },
      error: (error: any) => {
        console.log(error);
      }
    }); */
     
  }

  ngOnInit() {
    
    console.log('Nombre de usuario: ')
      console.log('Se cargó ngOnInit')
    };

  actualizarNombreUsuario(nombreUsuario: string, registroActualizado: IRegistro){
    this.userServ.obtenerNombreUsuarioServicio(nombreUsuario)
      .subscribe({
        next: usuario => {
          this.userServ.actualizarServicio(this.id, registroActualizado)
            .subscribe({
              next: response => {
                console.log('Registro actualizado', response);
              },
              error: error => {
                console.log('Hubo un error al actualizar el registro', error);
              }
            });
        },
        error: error => {
          console.log('Hubo un error al obtener el registro', error);
        }
      });
  }
  ionViewWillEnter(){
    console.log('Se cargó ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('Se cargó ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log("Se cargó ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("Se cargó ionViewDidLeave");
  }

  ngOnDestroy(){
    console.log("Se cargó ngOnDestroy");
  }

  /* enviarDatos(){
    localStorage.setItem('Nombre de usuario', this.persona.nombreUsuario);
    this.router.navigate(['/registro']);
  } */
  

  /* eliminarDatos(){
    localStorage.removeItem('Nombre de usuario');
    this.router.navigate(['/login-general'])
  } */

  /* limpiarDatos(){
    localStorage.clear();
    this.router.navigate(['/login-general'])
  } */

  irViajes() {
    this.router.navigate(['/viajes']);
  } 
}
