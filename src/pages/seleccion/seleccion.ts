import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DirectorioPage } from '../directorio/directorio';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SeleccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccion',
  templateUrl: 'seleccion.html',
})
export class SeleccionPage {


validar : Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    this.valida();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionPage');
  }

  irDirectorio (plaza:number){

    this.navCtrl.push(DirectorioPage,plaza);
  }

valida(){

  this.storage.get('tipo').then((valor)=>{
    if(valor == 1){
      this.validar=true;
    }
    if(valor == 2){
      this.validar=false;
    }
  })

}

}
