import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.data = this.navParams.get("producto");
  
  }

  irAtras(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  

}
