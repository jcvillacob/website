import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  times: any[] = [
    {title: '1991', info: 'Nace el sueño de Transportes Inoxidables, como una alternativa de transporte de líquidos en el país, materializando este gran emprendimiento.'},
    {title: '1994', info: 'Nos proyectamos internacionalmente. Iniciamos operaciones de transporte de líquidos a Ecuador.'},
    {title: '1999', info: 'Para este año nace Coordinadora de Tanques como estrategia comercial y de evolución.'},
    {title: '2002', info: 'Somos fuertes en la costa caribe y consolidamos el Consorcio DIA para atender operaciones de distribución en las minas del Cesar.'},
    {title: '2008', info: 'Adquisición estratégica. Realizamos la adquisición de Transportes M&S, consolidándonos como la mejor opción en el transporte de líquidos en el país.'},
    {title: '2010', info: 'Somos la transportadora que distribuye combustible a todos los aeropuertos del país.'},
    {title: '2014', info: 'Diversificamos nuestro portafolio de servicio con la adquisición de 8 graneleras para atender nuevas operaciones.'},
    {title: '2018', info: 'Incursionamos en la gestión logística y distribución de gases criogénicos (oxigeno, nitrógeno y argón).'},
    {title: '2020', info: 'Participamos activamente en la distribución de oxígeno a hospitales durante la contingencia del COVID 2019.'}
  ];


  


}
