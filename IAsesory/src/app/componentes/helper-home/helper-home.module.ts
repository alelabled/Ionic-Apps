import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelperHomePageRoutingModule } from './helper-home-routing.module';

import { HelperHomePage } from './helper-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelperHomePageRoutingModule
  ],
  declarations: [HelperHomePage]
})
export class HelperHomePageModule {}
