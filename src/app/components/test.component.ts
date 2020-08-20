 import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div style="border: 1px solid red;">
    <p>Entrada NAME: {{name}}</p>
    <p>Entrada Last NAME: {{lastName}}</p>
  </div>`,
  styles: ['.components{' +
  '}']
})
export class TestComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy {
  intermediario:string;
  @Input() age: number;
  //interceptar inputs
  @Input()
  get name() {
    return this.intermediario;
  }
  set name(name) {
    this.intermediario = '...'+ name;
  }
  @Input() lastName:string;
  @Input() description: string;
  @Output() clickSave = new EventEmitter();



  user:string = 'maria';

  constructor() { }
  ngOnChanges(changes: SimpleChanges){
    if(changes && changes.lastName && changes.lastName.currentValue){
      console.log("ON changes", changes.lastName.currentValue);
      const aux = 'aaa'+ changes.lastName.currentValue;
      this.lastName = aux;
    }

  }
  ngOnInit(): void {
    console.log('on Init', this.name);
  }

  ngDoCheck() {
    console.log('DO Check');
  }

  ngAfterContentInit() {
    console.log('After content init');
  }

  ngAfterContentChecked() {
    console.log('after content checked');
  }
  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('After view checked');
  }

  ngOnDestroy() {
    console.log("on destroy");
  }


  // tslint:disable-next-line:typedef
  onClickSave(){
    this.clickSave.emit({
      name: this.name,
      age: this.age,
      description: this.description
    });
  }

}


/*class persona {
  name: string;
  age: number;

  constructor() {
  }

  getName(){
    return name;
  }
  setName(name:string){
    this.name=name;
  }
}*/
