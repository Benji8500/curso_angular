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
    idEdit: any;

  // Variable para el formulario reactivo

  // nameControl = new FormControl();

  // Esto nos ayuda a construir los formularios
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {






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

  loadProducts(): void{
    this.products = [];
    this.prodGetSubs = this.productService.getProducts().subscribe(res => {
          // object entries convierte el Json en un array de arrays

          Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));

      });

  }

  ngOnInit(): void {
      this.loadProducts();
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

    onDelete(id: any): void {
      this.productService.deleteProducts(id).subscribe(
          res => {
          console.log('RESPONSE', res);
          this.loadProducts();
      },
          error => {
              console.log('Error: ', error);
          }
      );

    }

    onEdit(product: any): void{
        this.productForm.patchValue(product);
        this.idEdit = product.id;
    }

    onUpdate(): void {
        this.productService.updateProducts(this.idEdit, this.productForm.value).subscribe(

            res => {
                console.log('RESPONSE', res);
                this.loadProducts();
            },
            error => {
                console.log('Error: ', error);
            }

        );
    }
}
