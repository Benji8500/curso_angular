import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {
  @Input() name:string;
  @Input() stock:number;
  @Input() habilitado:boolean;
  @Input() tipo:string;


  constructor() { }

  ngOnInit(): void {
  }

}
