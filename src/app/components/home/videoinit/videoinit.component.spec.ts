import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoinitComponent } from './videoinit.component';

describe('VideoinitComponent', () => {
  let component: VideoinitComponent;
  let fixture: ComponentFixture<VideoinitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoinitComponent]
    });
    fixture = TestBed.createComponent(VideoinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
