import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { FaqComponent } from './components/faq/faq.component';
import { ServicComponent } from './components/servic/servic.component';
import { AboutComponent } from './components/about/about.component';
import { AmbientalComponent } from './components/ambiental/ambiental.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'cotizar', component: CotizarComponent},
  { path: 'about', component: AboutComponent},
  { path: 'servicios', component: ServicComponent},
  { path: 'sostenibilidad', component: AmbientalComponent},
  { path: 'faq', component: FaqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
