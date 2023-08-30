import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  cards: any[] = [
    {name: '', logo: '', description: ''},
    {name: '', logo: '', description: ''},
    {name: '', logo: '', description: ''},
    {name: '', logo: '', description: ''},
  ]
}
