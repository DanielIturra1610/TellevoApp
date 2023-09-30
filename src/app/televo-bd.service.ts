import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class TelevoBDService {

  

  constructor(private sqlite:SQLite, public database:SQLiteObject, private platform:Platform) { }

  crearBD(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'noticias.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        console.log('BD creada')
        this.crearTablas();
      })
      .catch(e => console.log('ERROR INESPERADO'));
    })
  }
  
  /* public database: SQLiteObject; */

  crearTablas(){}
}
