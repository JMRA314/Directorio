import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DirectorioPage } from '../directorio/directorio';
import  { AlertController } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {SeleccionPage} from '../seleccion/seleccion';
import { CallNumber} from '@ionic-native/call-number';
import { Clipboard } from '@ionic-native/clipboard';



/**
 * Generated class for the PlazaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plaza',
  templateUrl: 'plaza.html',
})
export class PlazaPage {

  nombres : any;
  password : string;
  constructor ( public clipboard : Clipboard,private callNumber : CallNumber,public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,public restProvider : RestProvider) {
    this.password= navParams.data;
    this.resetBusqueda();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlazaPage');
  }
irDirectorio (plaza:number){

  this.navCtrl.push(DirectorioPage,plaza);
}
irSeleccion (){

  this.navCtrl.push(SeleccionPage);
}
copiaTelefono(telefono:string){

  this.clipboard.copy(telefono);
  let alert = this.alertCtrl.create({
    title: 'Copiar número',
    message: 'Se copió '+ telefono+ ' al portapales',
    buttons: ['Aceptar']
  });
  alert.present()
  
}



buscar(nombre:string) {
  this.restProvider.buscar(nombre)
  .then(data => {
    this.nombres = data;
    console.log(this.nombres);
  });
}
resetBusqueda(){
  this.nombres =[];
}
getItems(ev) {
  // Reset items back to all of the items
  this.resetBusqueda();
  var val = ev.target.value;
  this.buscar(val);
}

llamar(numero:string){
  this.callNumber.callNumber(numero, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  
    }
  
    ConfirmaCall(numero:string) {
if(numero !='No asignado')
{
      let confirm = this.alertCtrl.create({
        title: 'Llamada',
        message: '¿Realizar llamada a '+numero +'?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              this.llamar(numero);
            }
          }
        ]
      });
      confirm.present()
    }else{

this.doAlert();

    }

  }
  
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      message: 'Sin número asignado actualmente',
      buttons: ['Aceptar']
    });
    alert.present()
  }



}
