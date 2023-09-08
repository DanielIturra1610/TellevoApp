import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPasajeroPage } from './login-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPasajeroPageRoutingModule {}
