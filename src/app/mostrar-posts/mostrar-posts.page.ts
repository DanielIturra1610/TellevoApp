import { Component, OnInit } from '@angular/core';
import { UserService } from '../usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-posts',
  templateUrl: './mostrar-posts.page.html',
  styleUrls: ['./mostrar-posts.page.scss'],
})
export class MostrarPostsPage implements OnInit {
  posts: any[] = [];

  constructor(private userServ: UserService, private alertController: AlertController) { }

  ngOnInit() {
    this.userServ.getPosts().subscribe({
      next: (res: any[]) => {
        this.posts = res;
      },
      error:async (error: any) => {
        console.error("Error al obtener los posts:", error);
        await this.mostrarAlerta();
      }
    });
  }

  async mostrarAlerta(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Hubo un problema al obtener los posts. Por favor, inténtalo de nuevamente más tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
