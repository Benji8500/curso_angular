import { Component, OnInit } from '@angular/core';
import {from, fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';
  name = 'Benjamin';
  sw = true;
  people = ['Alejandro', 'David', 'Jean-Luc', 'Quentin', 'Ingmar'];
  aux = 3;

  auxColor = 'red';

  auxClass = true;

  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  persons = [
    {
      name: 'Juan',
      lastName: 'Soria',
      age: '200',
      enable: true
    },
    {
      name: 'Maria',
      lastName: 'Soria',
      age: '200',
      enable: false
    },
    {
      name: 'Marco',
      lastName: 'Soria',
      age: '200',
      enable: true
    },
    {
      name: 'Andres',
      lastName: 'Soria',
      age: '200',
      enable: false
    }
  ];

  auxNumber = 2;
  exponent = 2;

ngOnInit(){
  const arr = from([1, 2, 3, 4, 5, 6]); // este array ya es un observable

  arr.subscribe(s => console.log('item:', s));

  const aux = fromEvent(document, 'mousemove');

  // aux.subscribe(s => console.log('event: ', s.clientX + ',' + s.clientY ));

  console.log('funcion pura:', this.suma(2, 3));
  console.log('funcion impura:', this.impura(2, 3));






}
suma(a: number, b: number){
  return a + b;
}

impura(a: number, b: number){
    return a + b + Math.random();
}


  saveClickChild(event){
    console.log('Event Child: ', event);
  }

  changeName() {
    this.name = 'benji';
  }
}
