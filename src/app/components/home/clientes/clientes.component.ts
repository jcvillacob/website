import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements AfterViewInit {
  logos: any[] = [
    { name: 'Pintuco', logo: 'assets/clientes/pintuco.svg' },
    { name: 'QBCO', logo: 'assets/clientes/logo-qbco.png' },
    { name: 'Explorer', logo: 'assets/clientes/explorer.svg' },
    { name: 'Stepan', logo: 'assets/clientes/stepan2.webp' },
    { name: 'Messer', logo: 'assets/clientes/messer.png' },
    { name: 'Terpel', logo: 'assets/clientes/terpel.svg' },
    { name: 'P&G', logo: 'assets/clientes/procter.svg' },
    { name: 'Brenntag', logo: 'assets/clientes/brenntag.svg' },
    { name: 'Conquimica', logo: 'assets/clientes/conquimica.png' },
    { name: 'Importex', logo: 'assets/clientes/importex.png' },
    { name: 'Vaselinas', logo: 'assets/clientes/vasilen.png' },
    { name: 'Dow Quimica', logo: 'assets/clientes/dow.svg' },
    { name: 'Rocsa', logo: 'assets/clientes/rocsa.png' },
    { name: 'Chemisphere', logo: 'assets/clientes/chemisphere.png' },
    { name: 'Central Oil', logo: 'assets/clientes/centraloil.png' },
    { name: 'Exro', logo: 'assets/clientes/exro.webp' },
    { name: 'IBC', logo: 'assets/clientes/ibc.png' },
    { name: 'AmSty', logo: 'assets/clientes/amsty.webp' },
    { name: 'SYGLA', logo: 'assets/clientes/sygla.png' },
    { name: 'CI-Yumbo', logo: 'assets/clientes/yumbo.jpeg' },
    { name: 'Portland', logo: 'assets/clientes/portland.png' },
    { name: 'Químicos del Cauca', logo: 'assets/clientes/quimicoscauca.webp' },
    { name: 'Carboquimica', logo: 'assets/clientes/carboquimica.png' },
    { name: 'Andercol', logo: 'assets/clientes/andercol.webp' },
  ];

  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper", {
      spaceBetween: 45,
      slidesPerView: 5,
      grid: {
        rows: 2,
      },
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 1,
          }
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 2,
          }
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 30,
          grid: {
            rows: 2,
          }
        }
      }
    });
  }

}
