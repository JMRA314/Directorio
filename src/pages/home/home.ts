import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {PlazaPage} from '../plaza/plaza';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
password : string;

  constructor(public navCtrl: NavController,public alertCtrl : AlertController,public storage: Storage) {

  }

  irPlaza(){
  if(this.password == '3736' || this.password =='6373')
  {
    this.storage.set('Validar', 1)
    if(this.password == '3736'){
      this.storage.set('tipo',1)
    this.navCtrl.push(PlazaPage);
    }
    if(this.password == '6373'){
      this.storage.set('tipo',2)
    this.navCtrl.push(PlazaPage);
    }
  }else {
 this.doAlert();
 this.password='';

  }
  }
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      message: 'PIN incorrecto, contacta con el Administrador',
      buttons: ['Aceptar']
    });
    alert.present()
  }



}
