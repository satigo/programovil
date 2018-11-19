import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { DetallesPage } from '../detalles/detalles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos: any;
  constructor(public navCtrl: NavController, public restProvider:RestProvider) {  
 
  }

  ionViewDidLoad(){
    this.restProvider.obtenerproductos()
    .subscribe(
      (data)=>{this.productos=data;},
      (error)=>{console.log(error);}
    )
  }

  irPaginaDetalles(producto){
    console.log(producto);
    this.navCtrl.push(DetallesPage,{"producto":producto});
  }

  eliminarProducto(producto){
    //console.log(producto.idproductos);
    this.restProvider.remove(producto.idproductos);
  }


  

}
