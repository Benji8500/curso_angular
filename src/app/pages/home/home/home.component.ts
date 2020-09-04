import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlatoService} from '../../../services/plato.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  platos = [

  ];
  idEdit: any;

  platoSubs: Subscription;
  platoGetSubs: Subscription;

  platoForm: FormGroup;

  constructor(private platoService: PlatoService, private formBuilder: FormBuilder) {
    this.platoForm = this.formBuilder.group(
        {
          name: ['', [Validators.required, Validators.minLength(3) ]],
          price: [''],
          stock: [''],
          type: ['', [Validators.required]],
          urlImage: ['']
        }
    );



  }

  loadPlatos(): void{
        this.platos = [];
        this.platoGetSubs = this.platoService.getPlato().subscribe(res => {
            // object entries convierte el Json en un array de arrays

            Object.entries(res).map((p: any) => this.platos.push({id: p[0], ...p[1]}));

        });

    }

  ngOnInit(): void {
      this.loadPlatos();
  }
  ngOnDestroy(): void {
    this.platoSubs.unsubscribe();
  }

  Edit(): void {
      this.platoService.updatePlato(this.idEdit, this.platoForm.value).subscribe(

          res => {
              console.log('RESPONSE', res);
              this.loadPlatos();
          },
          error => {
              console.log('Error: ', error);
          }

      );
  }

    // tslint:disable-next-line:typedef
  Create() {
        console.log('Form group: ', this.platoForm.value);
        this.platoSubs = this.platoService.addPlato(this.platoForm.value).subscribe(
            res => {
                console.log('RESP: ', res);
                this.loadPlatos();
            }
        );
    }

  Delete(id: any): void {
        this.platoService.deletePlato(id).subscribe(
            res => {
                console.log('RESPONSE', id);
                this.loadPlatos();
            },
            error => {
                console.log('Error: ', error);
            }
        );

    }

    toggleEdit(plato: any) {
        this.platoForm.patchValue(plato);
        this.idEdit = plato.id;
    }
}
