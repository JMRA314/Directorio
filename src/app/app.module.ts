import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DirectorioPage } from '../pages/directorio/directorio';
import { PlazaPage }  from '../pages/plaza/plaza';
import {SeleccionPage} from '../pages/seleccion/seleccion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import {CallNumber}  from '@ionic-native/call-number';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    DirectorioPage,
    PlazaPage,
    SeleccionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    DirectorioPage,
    PlazaPage,
    SeleccionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    CallNumber
  ]
})
export class AppModule {}
