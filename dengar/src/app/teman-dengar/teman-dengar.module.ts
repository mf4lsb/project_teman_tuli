import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemanDengarPageRoutingModule } from './teman-dengar-routing.module';

import { TemanDengarPage } from './teman-dengar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemanDengarPageRoutingModule
  ],
  declarations: [TemanDengarPage]
})
export class TemanDengarPageModule {}
