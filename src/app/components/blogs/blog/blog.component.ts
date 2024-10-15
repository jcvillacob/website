import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blog: any;
  recommendedBlogs: any[] = [];

  constructor(
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.blogsService.getBlog(id).subscribe((data) => {
          this.blog = data;
          this.loadRecommendedBlogs(id);

          // Esperar a que el contenido se renderice
          /* setTimeout(() => {
            this.adjustImages();
          }, 0); */
        });
      } else {
        console.error('Blog ID is required');
      }
    });
  }


  /* private adjustImages(): void {
    const images = this.el.nativeElement.querySelectorAll('.blog-content img');
    images.forEach((img: HTMLImageElement) => {
      this.renderer.removeAttribute(img, 'width');
      this.renderer.removeAttribute(img, 'height');
    });
  } */


  private loadRecommendedBlogs(currentBlogId: number): void {
    this.blogsService.getBlogs().subscribe((data) => {
      // Filtrar blogs excluyendo el actual y limitar a 3 recomendaciones
      this.recommendedBlogs = data
        .filter((blog) => blog.BlogID !== currentBlogId)
        .slice(0, 3);
    });
  }

  // Método para volver a la página de blogs
  goBack(): void {
    this.router.navigate(['/blog']);
  }
}
