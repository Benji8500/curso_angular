import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProductService {

  constructor() { }


  public getProducts(): any []{
    return [
      {
        description: 'aaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'Sushi'
      },
      {
        description: 'aaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'Garbo'
      },
      {
        description: 'aaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'Cheese'
      },
      {
        description: 'aaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'Salteña'
      }
    ];
  }
}
