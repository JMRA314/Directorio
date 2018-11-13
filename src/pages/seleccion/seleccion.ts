import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DirectorioPage } from '../directorio/directorio';

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

password :string;
validar : Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.password= navParams.data;
    this.valida();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionPage');
  }

  irDirectorio (plaza:number){

    this.navCtrl.push(DirectorioPage,plaza);
  }

valida(){
if(this.password =='8520'){
 this.validar=true;


}else{
  this.validar = false;
}

}

}
