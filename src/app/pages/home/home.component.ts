import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [

  ];

  prodSubs: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.prodSubs = this.productService.getProducts().subscribe(res => {
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
