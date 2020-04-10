import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelperHomePage } from './helper-home.page';

const routes: Routes = [
  {
    path: '',
    component: HelperHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelperHomePageRoutingModule {}
