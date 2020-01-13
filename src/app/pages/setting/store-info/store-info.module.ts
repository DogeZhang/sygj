import { ZyhModule } from './../../../shared/components/zyh.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { StoreInfoPage } from './store-info.page';

const routes: Routes = [
  {
    path: '',
    component: StoreInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ZyhModule
  ],
  declarations: [StoreInfoPage]
})
export class StoreInfoPageModule {}
