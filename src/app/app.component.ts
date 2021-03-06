import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {PlazaPage} from '../pages/plaza/plaza';
import {HomePage} from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public alertCtrl : AlertController,public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.checarPassword();
      this.splashScreen.hide();
    });
  }
checarPassword(){
  this.storage.get('Validar').then((cont=>{ 
    if(cont==null){
 this.rootPage = HomePage
    }else{
      this.rootPage = PlazaPage
    }
    
      }));

}
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Estrategas de México',
      message: 'Directorio del personal de Estrategas. Version 1.0/2018',
      buttons: ['Aceptar']
    });
    alert.present()
  }


}
