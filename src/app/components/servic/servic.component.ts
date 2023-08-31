import { Component } from '@angular/core';

@Component({
  selector: 'app-servic',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent {
  servicios: any[] = [
    {name: 'Transporte de carga Líquida y granel.', desc: 'Servicio de alta disponibilidad contando con una gran despliegue de mantenimiento a lo largo del país.', img: '../../../../assets/servicios/dosMulas.png'},
    {name: 'Transporte de carga Líquida y granel.', desc: 'Servicio de alta disponibilidad contando con una gran despliegue de mantenimiento a lo largo del país.', img: '../../../../assets/servicios/mula.png'},
    {name: 'Transporte de carga Líquida y granel.', desc: 'Servicio de alta disponibilidad contando con una gran despliegue de mantenimiento a lo largo del país.', img: '../../../../assets/servicios/gases.png'},
    {name: 'Transporte de carga Líquida y granel.', desc: 'Servicio de alta disponibilidad contando con una gran despliegue de mantenimiento a lo largo del país.', img: '../../../../assets/servicios/dosMulas.png'},
  ];
  vehiculos: any[] = [
    {name: 'Tractomula', ejes: '6', peso: '34.000', vol: '10.800', img: '../../../../assets/vhs/tractomula.png'},
    {name: 'Dobletroque', ejes: '3', peso: '34.000', vol: '10.800', img: '../../../../assets/vhs/tractomula.png'},
    {name: 'Sencillo', ejes: '2', peso: '34.000', vol: '10.800', img: '../../../../assets/vhs/tractomula.png'},
  ];



}
