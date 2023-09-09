import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-pasajero',
  templateUrl: './login-pasajero.page.html',
  styleUrls: ['./login-pasajero.page.scss'],
})
export class LoginPasajeroPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  

}
