import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private apiUrl = `${environment.apiURL}/blogs`;
  private apiUrlNews = `${environment.apiURL}/noticias`;


  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBlog(blogId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${blogId}`);
  }

  getNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlNews).pipe(
      map(news => news.slice(-3).reverse())
    );
  }
}
