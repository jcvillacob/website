import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { FaqComponent } from './components/faq/faq.component';
import { ServicComponent } from './components/servic/servic.component';
import { AboutComponent } from './components/about/about.component';
import { AmbientalComponent } from './components/ambiental/ambiental.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blogs/blog/blog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'cotizar', component: CotizarComponent},
  { path: 'about', component: AboutComponent},
  { path: 'servicios', component: ServicComponent},
  { path: 'sostenibilidad', component: AmbientalComponent},
  { path: 'pqrs', component: PqrsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'blog', component: BlogsComponent},
  { path: 'blog/:id', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
