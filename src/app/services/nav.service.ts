import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private activeNavSubject = new Subject<boolean>();
  public activeNavSubject$ = this.activeNavSubject.asObservable();
  private isActive = false; // Variable para mantener el estado actual

  setNavbar(data: boolean): void {
    this.isActive = data; // Cambia el valor de isActive
    this.activeNavSubject.next(this.isActive); // Emite el nuevo valor
  }

  getNavbar(): Observable<any> {
    return this.activeNavSubject$;
  }

}
