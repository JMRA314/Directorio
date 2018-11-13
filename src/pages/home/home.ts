import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';

import {PlazaPage} from '../plaza/plaza';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
password : string;

  constructor(public navCtrl: NavController,public alertCtrl : AlertController) {

  }

  irPlaza(){
  if(this.password == '8520' || this.password=='0258')
  {
    this.navCtrl.push(PlazaPage,this.password);
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
