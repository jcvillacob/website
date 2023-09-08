import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent  implements AfterViewInit {
  slides: any[] = [
    {img: '../../../../assets/carousel/1.png', link: '', title: 'Empresa Lider en la Industria', info: "Hemos estado estableciendo el estándar para el transporte a granel confiable desde 1945. Únase hoy a nuestro equipo líder en la industria."},
    {img: '../../../../assets/carousel/2.png', link: '', title: 'Servicios con Seguridad', info: "Hemos estado estableciendo el estándar para el transporte a granel confiable desde 1945. Únase hoy a nuestro equipo líder en la industria."},
    {img: '../../../../assets/carousel/3.png', link: '', title: 'Servicios con Seguridad', info: "Hemos estado estableciendo el estándar para el transporte a granel confiable desde 1945. Únase hoy a nuestro equipo líder en la industria."},
    {img: '../../../../assets/carousel/1.png', link: '', title: 'Servicios con Seguridad', info: "Hemos estado estableciendo el estándar para el transporte a granel confiable desde 1945. Únase hoy a nuestro equipo líder en la industria."},
    {img: '../../../../assets/carousel/2.png', link: '', title: 'Servicios con Seguridad', info: "Hemos estado estableciendo el estándar para el transporte a granel confiable desde 1945. Únase hoy a nuestro equipo líder en la industria."},
    {img: '../../../../assets/carousel/3.png', link: '', title: 'Servicios con Seguridad', info: "Hemos estado estableciendo el estándar para el transporte a granel confiable desde 1945. Únase hoy a nuestro equipo líder en la industria."},
  ];


  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper1", {
      spaceBetween: 30,
      centeredSlides: true,
      effect: "slide",
      loop: true,
      grabCursor: true,
      
      /* autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }, */
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
