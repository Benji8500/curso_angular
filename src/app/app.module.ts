import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRouting} from './app.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';

import {MatIconModule} from '@angular/material/icon';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './modules/admin/admin.component';
import {AuthInterceptor} from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouting,
    NgbModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [AdminComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
