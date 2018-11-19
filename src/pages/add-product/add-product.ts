import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {
  form: FormGroup;
  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    private service: RestProvider,
    private alertCotrl: AlertController,
    public navParams: NavParams) {
      this.crearFormulario();
  }

  crearFormulario(){
    this.form = this.fb.group({
      categoria: ['', Validators.required],
      imagen: ['', Validators.required],
      precio: ['', Validators.required],
      existencia: ['', Validators.required],
      descripcion: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  guardarProducto() {
    this.service.addProducto(this.form.value)
    this.showAlert()        
  }

  showAlert() {
    let alert = this.alertCotrl.create({
      title: 'Agregar inventario',
      subTitle: 'Los datos fueron guardados!',
      buttons: ['Ok']
    });
    alert.present();
    this.form.reset();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

}
