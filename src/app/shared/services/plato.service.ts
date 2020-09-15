import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class PlatoService {

  constructor(private http: HttpClient) {
  }

  public getPlato(): Observable<any> {
    return this.http.get('https://pedidosyaa-test.firebaseio.com/products.json');
  }
  /*
    public addPlato(plato: any): Observable<any> {
      return this.http.post('https://pedidosyaa-test.firebaseio.com/products.json', product);
    }

    public deletePlato(id: any): Observable<any> {
      return this.http.delete(`https://angular-benjaminsoto-2020.firebaseio.com/products/${id}.json`);

    }

    public updatePlato(id:any, product: any): Observable<any> {
      return this.http.put(`https://angular-benjaminsoto-2020.firebaseio.com/products/${id}.json`, product);
    }
    */


}
