import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AdminService} from '../../../../services/admin.service';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit, OnChanges {

  platos = [

  ];

  stockN: number;
  stockInt: number;
  stockTot = 0;

  constructor(private adminService: AdminService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.platos = this.adminService.platos;
    this.stockTot =  this.platos.reduce((total, platos) => total + platos.stock, 0);
    console.log(this.platos);


  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    this.platos = this.adminService.platos;
    this.stockTot =  this.platos.reduce((total, platos) => total + platos.stock, 0);
    console.log(this.platos);
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);

  }

}
