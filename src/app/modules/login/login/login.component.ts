import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  onLogin(form: any): void {
    console.log('FORM: ', form.value);

    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
        res => {
          console.log('LOGIN RESPONSE: ', res);
          this.router.navigate(['admin']);
        },
        err => {
          console.log('LOGIN ERROR: ');
        }
    );
  }


  //Navegacion a partir de TS no de routerLink
  onLogin2(formulario): void {
    console.log('Variable local form: ', formulario.value);
    this.router.navigate(['/pages']);
  }
}
