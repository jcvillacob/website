import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/home/clientes/clientes.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { SwiperComponent } from './components/home/swiper/swiper.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { ServicComponent } from './components/servic/servic.component';
import { TimeComponent } from './components/about/time/time.component';
import { AmbientalComponent } from './components/ambiental/ambiental.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClientesComponent,
    CotizarComponent,
    FaqComponent,
    AboutComponent,
    SwiperComponent,
    ContactComponent,
    ServiciosComponent,
    ServicComponent,
    TimeComponent,
    AmbientalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
