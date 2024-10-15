import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];
  filteredBlogs: any[] = [];
  displayedBlogs: any[] = [];
  /* selectedCategory: string = 'Todas';
  categories: string[] = ['Todas', 'Acción', 'Compras', 'Carros']; */
  showLoadMore: boolean = false;
  blogsToShow: number = 9;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe((data) => {
      this.blogs = data;
      this.filteredBlogs = data;
      /* this.extractCategories(); */
      this.updateDisplayedBlogs();
    });
  }

  /* filterBlogs(category: string): void {
    this.selectedCategory = category;
    if (category === 'Todas') {
      this.filteredBlogs = this.blogs;
    } else {
      this.filteredBlogs = this.blogs.filter(
        (blog) => blog.Categoria?.toLowerCase() === category.toLowerCase()
      );
    }
    this.blogsToShow = 9;
    this.updateDisplayedBlogs();
  } */

  /* private extractCategories(): void {
    const categoriesSet = new Set<string>(
      this.blogs.map((blog) => blog.Categoria)
    );
    //this.categories = ['Todas', ...Array.from(categoriesSet)];
  } */

  private updateDisplayedBlogs(): void {
    this.displayedBlogs = this.filteredBlogs.slice(0, this.blogsToShow);
    this.showLoadMore = this.filteredBlogs.length > this.blogsToShow;
  }

  loadMoreBlogs(): void {
    this.blogsToShow += 9;
    this.updateDisplayedBlogs();
  }
}
