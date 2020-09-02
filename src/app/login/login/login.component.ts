import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  sw = true;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log('username: ', this.username);
    console.log('password: ', this.password);
  }


  //Navegacion a partir de TS no de routerLink
  onLogin2(formulario): void {
    console.log('Variable local form: ', formulario.value);
    this.router.navigate(['/pages']);
  }
}
