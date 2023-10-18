import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPostsPageRoutingModule } from './mostrar-posts-routing.module';

import { MostrarPostsPage } from './mostrar-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPostsPageRoutingModule
  ],
  declarations: [MostrarPostsPage]
})
export class MostrarPostsPageModule {}
