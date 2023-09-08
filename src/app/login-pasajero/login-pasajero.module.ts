import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPasajeroPageRoutingModule } from './login-pasajero-routing.module';

import { LoginPasajeroPage } from './login-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPasajeroPageRoutingModule
  ],
  declarations: [LoginPasajeroPage]
})
export class LoginPasajeroPageModule {}
