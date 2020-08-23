import {Directive, ElementRef, HostListener, Input, Output} from '@angular/core';
import {stringify} from '@angular/compiler/src/util';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {
  @Input() appNgColor:string;
  @Output()

  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse ENTER ');
    this.changeColor(this.appNgColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse LEAVE s ');
    this.changeColor('red');

  }
  constructor(private el: ElementRef) {
    console.log('ELEMENT REF', el);
    this.changeColor('yellow');
  }

  changeColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }


}


