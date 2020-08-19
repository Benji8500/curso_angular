import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input() name:string;
  @Input() lastName:string;
  @Input() age:number;
  @Input() enable:boolean;



  constructor() { }

  ngOnInit(): void {
  }

}
