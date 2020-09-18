import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PlatoService} from '../../services/plato.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public platoService: PlatoService, private authService: AuthService, public adminService: AdminService) {

  }

    platos = [

    ];



  ngOnInit(): void {
      this.adminService.loadPlatos();
      this.platos = this.adminService.platos;
  }



  Delete(id: any): void {
        this.platoService.deletePlato(id, this.authService.getToken()).subscribe(
            res => {
                console.log('RESPONSE', id);
                this.adminService.loadPlatos();
                this.platos = this.adminService.platos;
            },
            error => {
                console.log('Error: ', error);
            }
        );

    }

    @Input() item: any;
    toggleEdit(plato: any) {
        this.adminService.platoForm.patchValue(plato);
        this.adminService.idEdit = plato.id;
        console.log(plato);
    }
}
