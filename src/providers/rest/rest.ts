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
  return this.http.get('http://localhost:1414/restful/productos.php');
}

obtenerusuario(idusuario){
return this.http.get('http://localhost:1414/restful/usuarios.php/?idusuario='+idusuario);
}

}
