import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://identitytoolkit.googleapis.com';
  key = 'AIzaSyA968rNQvj2xWvRBOuP2SxAYjaiOyaTgNA';

  constructor(private http: HttpClient,
              private router: Router) {

  }

  public login(body: any): Observable<any> {
    return this.http.post(`${this.url}//v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
        map((res: any) => {
          this.authSuccess(res.idToken, res.localId);
          return res;
        })
    );
  }

  private authSuccess(token: string, userId: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  public getToken(): string {
    return localStorage.getItem('token');
    console.log(localStorage.getItem('token'));
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
