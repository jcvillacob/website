import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements AfterViewInit {
  cards: any[] = [
    {img: '../../../../assets/servicios/ct1.png', title: 'Transporte de carga Líquida y granel.'},
    {img: '../../../../assets/servicios/doble.png', title: 'Administración de Flota.'},
    {img: '../../../../assets/servicios/ct2.png', title: 'Alquiler de Tanques y Vehículos.'},
    {img: '../../../../assets/servicios/ct1.png', title: 'Transporte de gases Criogénicos y GLP.'},
    {img: '../../../../assets/servicios/doble.png', title: 'Soluciones Logísticas.'},
  ]

  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper2", {
      spaceBetween: 15,
      slidesPerView: 1,
      loop: false,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
  }
}
