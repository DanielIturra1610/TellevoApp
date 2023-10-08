import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-general',
  templateUrl: './login-general.page.html',
  styleUrls: ['./login-general.page.scss'],
})
export class LoginGeneralPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirigeLoginPasajero() {
    this.router.navigate(['/login-pasajero']);
  }

  redirigeLoginConductor() {
    this.router.navigate(['/login-conductor']);
  }

}
