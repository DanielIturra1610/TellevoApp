import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGeneralPage } from './login-general.page';

const routes: Routes = [
  {
    path: '',
    component: LoginGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginGeneralPageRoutingModule {}
