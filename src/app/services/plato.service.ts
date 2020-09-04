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
  public deletePlato(id: any): Observable<any> {
    return this.http.delete(`https://pedidosyaa-test.firebaseio.com/products/${id}.json`);

  }

  public addPlato(plato: any): Observable<any> {
      return this.http.post('https://pedidosyaa-test.firebaseio.com/products.json', plato);
    }



    public updatePlato(id:any, plato: any): Observable<any> {
      return this.http.put(`https://pedidosyaa-test.firebaseio.com/products/${id}.json`, plato);
    }


}
