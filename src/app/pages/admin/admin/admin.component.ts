import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  // grupo de formularios
    products = [];

    prodSubs: Subscription;
    prodGetSubs: Subscription;

    productForm: FormGroup;

  // Variable para el formulario reactivo

  // nameControl = new FormControl();

  // Esto nos ayuda a construir los formularios
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {


      this.prodGetSubs = this.productService.getProducts().subscribe(res => {
          // object entries convierte el Json en un array de arrays

          console.log('RESPUESTA: ', res);
          console.log('RESPUESTA: ', Object.entries(res));

          Object.entries(res).map(p => this.products.push(p[1]));

      });







          this.productForm = this.formBuilder.group(
        {
          description: ['', [Validators.required, Validators.minLength(3) ]],
          imageUrl: [''],
          ownerId: [''],
          price: [''],
          title: ['']
        }
    );
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.prodSubs.unsubscribe();
      this.prodGetSubs.unsubscribe();
  }

    /*onEnviar() {
      console.log('valor: ', this.nameControl);
      console.log('valor: ', this.nameControl.value);
    }*/
  onEviar2() {
    console.log('Form group: ', this.productForm.value);
    this.prodSubs = this.productService.addProducts(this.productForm.value).subscribe(
        res => {
            console.log('RESP: ', res);
        }
    );
  }
}
