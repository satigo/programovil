import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';





/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  //apiUrl = 'https://jsonplaceholder.typicode.com';
  apiUrl='http://localhost:59816/restienda/webresources/mypackage.';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

obtenerproductos(){
  return this.http.get('http://localhost:1212/restful/productos.php');
}

obtenerusuario(idusuario){
return this.http.get('http://localhost:1212/restful/usuarios.php/?idusuario='+idusuario);
}
addProducto(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://localhost:1212/restful/productos.php', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        //reject(err);
      });
  });
}
}
