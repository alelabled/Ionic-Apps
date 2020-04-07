import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsesorPageRoutingModule } from './asesor-routing.module';

import { AsesorPage } from './asesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsesorPageRoutingModule
  ],
  declarations: [AsesorPage]
})
export class AsesorPageModule {}
