import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BandComponent } from './components/band/band.component';
import {ConcertModule} from './modules/concert/concert.module';
import {ProviderModule} from './modules/provider/provider.module';





@NgModule({
  declarations: [
    AppComponent,
    BandComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ConcertModule,
    ProviderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
