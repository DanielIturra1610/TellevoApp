import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'login-general',
    loadChildren: () => import('./login-general/login-general.module').then( m => m.LoginGeneralPageModule)
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login-pasajero',
    loadChildren: () => import('./login-pasajero/login-pasajero.module').then( m => m.LoginPasajeroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'pass-recovery',
    loadChildren: () => import('./pass-recovery/pass-recovery.module').then( m => m.PassRecoveryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
