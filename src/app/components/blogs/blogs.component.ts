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
  showLoadMore: boolean = false;
  blogsToShow: number = 9;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe((data) => {
      this.blogs = data.reverse();
      this.filteredBlogs = data;
      this.updateDisplayedBlogs();
    });
  }

  private updateDisplayedBlogs(): void {
    this.displayedBlogs = this.filteredBlogs.slice(0, this.blogsToShow);
    this.showLoadMore = this.filteredBlogs.length > this.blogsToShow;
  }

  loadMoreBlogs(): void {
    this.blogsToShow += 9;
    this.updateDisplayedBlogs();
  }
}
