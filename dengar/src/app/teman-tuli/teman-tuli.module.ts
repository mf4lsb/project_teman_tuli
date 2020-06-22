import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemanTuliPageRoutingModule } from './teman-tuli-routing.module';

import { TemanTuliPage } from './teman-tuli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemanTuliPageRoutingModule
  ],
  declarations: [TemanTuliPage]
})
export class TemanTuliPageModule {}
