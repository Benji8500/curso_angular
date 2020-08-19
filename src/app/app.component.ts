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

  persons = [
    {
      name: 'Juan',
      lastName: 'Soria',
      age: '200',
      enable: 'true'
    },
    {
      name: 'Maria',
      lastName: 'Soria',
      age: '200',
      enable: 'false'
    },
    {
      name: 'Marco',
      lastName: 'Soria',
      age: '200',
      enable: 'true'
    },
    {
      name: 'Andres',
      lastName: 'Soria',
      age: '200',
      enable: 'false'
    }
  ];

ngOnInit(){
  const arr = from([1, 2, 3, 4, 5, 6]); // este array ya es un observable

  arr.subscribe(s => console.log('item:', s));

  const aux = fromEvent(document, 'mousemove');

  // aux.subscribe(s => console.log('event: ', s.clientX + ',' + s.clientY ));








}


  saveClickChild(event){
    console.log('Event Child: ', event);
  }

  changeName() {
    this.name = 'benji';
  }
}
