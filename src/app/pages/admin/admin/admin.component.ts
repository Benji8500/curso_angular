import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // grupo de formularios
  productForm: FormGroup;

  // Variable para el formulario reactivo

  // nameControl = new FormControl();

  // Esto nos ayuda a construir los formularios
  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group(
        {
          description: '',
          imageUrl: '',
          ownerId: '',
          price: '',
          title: ''
        }
    );
  }

  ngOnInit(): void {
  }

  /*onEnviar() {
    console.log('valor: ', this.nameControl);
    console.log('valor: ', this.nameControl.value);
  }*/
  onEviar2() {
    console.log('Form group: ', this.productForm.value);
  }
}
