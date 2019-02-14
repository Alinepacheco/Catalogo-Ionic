import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheProdutoPage } from './detalhe-produto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheProdutoPage]
})
export class DetalheProdutoPageModule {}
