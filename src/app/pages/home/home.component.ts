import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [

  ];

  prodSubs: Subscription;

  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
      this.prodSubs = this.productService.getProducts(this.authService.getToken()).subscribe(res => {
        // object entries convierte el Json en un array de arrays

        console.log('RESPUESTA: ', res);
        console.log('RESPUESTA: ', Object.entries(res));

        Object.entries(res).map(p => this.products.push(p[1]));

      });
  }
  ngOnDestroy(): void {
    this.prodSubs.unsubscribe();
  }

}
