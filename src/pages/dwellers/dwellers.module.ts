import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DwellersPage } from './dwellers';

@NgModule({
  declarations: [
    DwellersPage,
  ],
  imports: [
    IonicPageModule.forChild(DwellersPage),
  ],
})
export class DwellersPageModule {}
