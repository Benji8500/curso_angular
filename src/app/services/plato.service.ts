import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable(/*{
  providedIn: 'root'
}*/)
export class PlatoService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getPlato(token: any): Observable<any> {
    return this.http.get(`https://pedidosyaa-test.firebaseio.com/products.json?auth=${token}`);
  }
  public deletePlato(id: any, token: any): Observable<any> {
    return this.http.delete(`https://pedidosyaa-test.firebaseio.com/products/${id}.json?auth=${token}`);

  }

  public addPlato(plato: any, token: any): Observable<any> {
      return this.http.post(`https://pedidosyaa-test.firebaseio.com/products.json?auth=${token}`, plato);
    console.log(token);
  }



    public updatePlato(id:any, plato: any, token: any): Observable<any> {
      return this.http.put(`https://pedidosyaa-test.firebaseio.com/products/${id}.json?auth=${token}`, plato);
    }


}
