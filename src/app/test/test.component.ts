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
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div style="border: 1px solid red;">
    <p>Componente test 1</p>
    <p>Entrada AGE: {{age}}</p>
    <p>Entrada NAME: {{name}}</p>
    <!-- Write your comments here llaves dobles para que reconozca la variable-->
    <p>Entrada DESCRIPTION: {{description}}</p>
    <button (click) ="onClickSave()">save</button>
    <input type="text" [(ngModel)]="name">
    <!-- Outputs es con parentesis -->
    <!-- Inputs es con corchetes -->
    <p>USER: {{user}}</p>
  </div>`,
  styles: ['.test{' +
  '}']
})
export class TestComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy {

  @Input() age: number;
  @Input() name: string;
  @Input() description: string;
  @Output() clickSave = new EventEmitter();



  user:string = 'maria';

  constructor() { }
  ngOnChanges(): void {
    console.log('on changes');
  }
  ngOnInit(): void {
    console.log('on Init');
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
