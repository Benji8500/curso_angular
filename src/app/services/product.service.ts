import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProductService {

  constructor(private http: HttpClient) {
  }


  public getProducts(): Observable<any> {
    return this.http.get('https://angular-benjaminsoto-2020.firebaseio.com/products.json');
  }

  public addProducts(product: any): Observable<any> {
    return this.http.post('https://angular-benjaminsoto-2020.firebaseio.com/products.json', product);
  }

  public deleteProducts(id: any): Observable<any> {
    return this.http.delete(`https://angular-benjaminsoto-2020.firebaseio.com/products/${id}.json`);

  }

  public updateProducts(id:any, product: any): Observable<any> {
    return this.http.put(`https://angular-benjaminsoto-2020.firebaseio.com/products/${id}.json`, product);
  }

}
