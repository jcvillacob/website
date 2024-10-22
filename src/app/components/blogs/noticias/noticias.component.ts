import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Instala los módulos que vas a usar
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blogService.getNews().subscribe(data => {
      this.noticias = data;
    });
  }
}
