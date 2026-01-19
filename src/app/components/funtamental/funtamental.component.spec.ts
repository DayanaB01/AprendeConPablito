import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuntamentalComponent } from './funtamental.component';

describe('FuntamentalComponent', () => {
  let component: FuntamentalComponent;
  let fixture: ComponentFixture<FuntamentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuntamentalComponent]
    });
    fixture = TestBed.createComponent(FuntamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
