import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiUrl='https://implementta.net/andro/appUsers.aspx?query=sp_usuarios';
apiUrl1='https://implementta.net/andro/appUsers.aspx?query=sp_usuarios_buscar';
apiUrl2='https://implementta.net/andro/appUsers.aspx?query=sp_usuarios_buscar_plaza';


  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers(plaza:number) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+' '+plaza).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  buscar(nombre:string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl1+' '+nombre).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  buscarPlaza(nombre:string,plaza:number) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl2+' '+nombre+','+plaza).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



}
