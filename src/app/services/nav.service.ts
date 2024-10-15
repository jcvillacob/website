import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private activeNavSubject = new Subject<boolean>();
  public activeNavSubject$ = this.activeNavSubject.asObservable();
  private isActive = false;

  setNavbar(data: boolean): void {
    this.isActive = data;
    this.activeNavSubject.next(this.isActive);
  }

  getNavbar(): Observable<any> {
    return this.activeNavSubject$;
  }

}
