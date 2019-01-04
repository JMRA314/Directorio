import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { CallNumber} from '@ionic-native/call-number';
import  { AlertController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

/**
 * Generated class for the DirectorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html',
})
export class DirectorioPage {
users: any;
plaza :number;
nombre : string;
telefono :string;


constructor(public alertCtrl : AlertController,
  private callNumber : CallNumber,
  public restProvider : RestProvider ,
  public navCtrl: NavController,
   public navParams: NavParams,
   public clipboard : Clipboard) {
this.plaza = navParams.data;
this.resetBusqueda();
this.nombrePlaza();

  }
  copiaTelefono(telefono:string){

    this.clipboard.copy(telefono);
    let alert = this.alertCtrl.create({
      title: 'Copiar número',
      message: 'Se copió '+ telefono + ' al portapales',
      buttons: ['Aceptar']
    });
    alert.present()
    
  }

  getUsers(plaza:number) {
    this.restProvider.getUsers(plaza)
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

  llamar(numero:string){
this.callNumber.callNumber(numero, true)
.then(res => console.log('Launched dialer!', res))
.catch(err => console.log('Error launching dialer', err));

  }

  ConfirmaCall(numero:string) {
if (numero!='No asignado'){
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

buscar(nombre:string) {
  this.restProvider.buscarPlaza(nombre,this.plaza)
  .then(data => {
    this.users = data;
    console.log(this.users);
  

  });
}
resetBusqueda(){
  this.getUsers(this.plaza);
}
getItems(ev) {
  // Reset items back to all of the items
  //this.resetBusqueda();
  var val = ev.target.value;
  this.buscar(val);

}

 doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      message: 'Sin número asignado actualmente',
      buttons: ['Aceptar']
    });
    alert.present()
  }


nombrePlaza(){
 switch(this.plaza){
 case 2 : this.nombre ='Tijuana';
 break;
 case 3 : this.nombre ='Vallarta';
 break;
 case 4 : this.nombre ='Texcoco';
 break;
 case 5 : this.nombre ='Corporativo';
 break;
 case 7 : this.nombre ='Tuxpan';
 break;
 case 10 : this.nombre ='Villahermosa';
 break;

 }

}



}


