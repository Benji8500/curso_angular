import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PlatoService} from './plato.service';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  platoForm: FormGroup;
  platoSubs: Subscription;
  platos = [

  ];
  idEdit: any;


  platoGetSubs: Subscription;



  loadPlatos(): void{
    this.platos = [];
    this.platoGetSubs = this.platoService.getPlato(this.authService.getToken()).subscribe(res => {
      // object entries convierte el Json en un array de arrays

      Object.entries(res).map((p: any) => this.platos.push({id: p[0], ...p[1]}));

    });

  }


  constructor(private platoService: PlatoService, private authService: AuthService, private formBuilder:FormBuilder) {
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
}
