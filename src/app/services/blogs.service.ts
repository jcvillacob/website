import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private apiUrl = `${environment.apiURL}/blogs`;

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBlog(blogId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${blogId}`);
  }
}