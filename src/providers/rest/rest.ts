import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';






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

eliminarproductos(idproducto){
  //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  const url='http://localhost:1414/restful/productos.php/?idproductos='+idproducto;
  return this.http.delete(url);
}

remove(id) {
  const dir='http://localhost:1414/restful/productos.php/';
  return new Promise((resolve, reject) => {
    let url = dir + '?idproductos=' + id;
    this.http.delete(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
  });
}


/*deleteUser (id: string): Observable<User> {
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<User>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted user id=${id}`)),
    catchError(this.handleError<User>('deleteUser'))
  );
}*/

obtenerusuario(idusuario){
return this.http.get('http://localhost:1414/restful/usuarios.php/?idusuario='+idusuario);
}
addProducto(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://localhost:1414/restful/productos.php', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        //reject(err);
      });
  });
}
}
