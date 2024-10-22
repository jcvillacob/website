import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

declare var Swiper: any; // Declarar Swiper globalmente

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, AfterViewInit {
  noticias: any[] = [];
  swiperInstance: any;

  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blogService.getNews().subscribe(data => {
      this.noticias = data;
      // Inicializar Swiper después de cargar los datos
      setTimeout(() => {
        this.initializeSwiper();
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    // Si deseas inicializar Swiper aquí, asegúrate de que los datos ya estén cargados
  }

  initializeSwiper(): void {
    if (this.swiperInstance) return; // Evitar múltiples inicializaciones
    this.swiperInstance = new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
    });
  }
}
