import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemanTuliPage } from './teman-tuli.page';

const routes: Routes = [
  {
    path: '',
    component: TemanTuliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemanTuliPageRoutingModule {}
