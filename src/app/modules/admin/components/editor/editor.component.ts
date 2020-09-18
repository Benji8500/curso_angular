import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../../services/admin.service';
import {PlatoService} from '../../../../services/plato.service';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    platoForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public adminService: AdminService, public platoService: PlatoService, private authService: AuthService) {
    this.platoForm = this.formBuilder.group(
        {
          name: ['', [Validators.required, Validators.minLength(3) ]],
          price: [''],
          stock: [''],
          type: ['', [Validators.required]],
          urlImage: ['']
        }
    );
    this.adminService.platoForm = this.platoForm;
  }

  ngOnInit(): void {
      this.adminService.loadPlatos();
  }

  Edit(): void {
        this.platoService.updatePlato(this.adminService.idEdit, this.platoForm.value, this.authService.getToken()).subscribe(

            res => {
                console.log('RESPONSE', res);
                this.adminService.loadPlatos();
            },
            error => {
                console.log('Error: ', error);
            }

        );
    }

    // tslint:disable-next-line:typedef
    Create() {
        console.log('Form group: ', this.platoForm.value);
        this.adminService.platoSubs = this.platoService.addPlato(this.platoForm.value, this.authService.getToken()).subscribe(
            res => {
                console.log('RESP: ', res);
                this.adminService.loadPlatos();
            }
        );
    }

}
