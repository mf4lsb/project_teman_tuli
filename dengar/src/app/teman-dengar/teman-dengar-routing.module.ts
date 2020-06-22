import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemanDengarPage } from './teman-dengar.page';

const routes: Routes = [
  {
    path: '',
    component: TemanDengarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemanDengarPageRoutingModule {}
