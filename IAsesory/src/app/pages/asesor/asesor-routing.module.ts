import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsesorPage } from './asesor.page';

const routes: Routes = [
  {
    path: '',
    component: AsesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsesorPageRoutingModule {}
