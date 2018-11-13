import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectorioPage } from './directorio';

@NgModule({
  declarations: [
    DirectorioPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectorioPage),
  ],
})
export class DirectorioPageModule {}
