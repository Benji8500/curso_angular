import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() age: number;
  @Input() name: string;
  @Input() description: string;
  @Output() clickSave = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
