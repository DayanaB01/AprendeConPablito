import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicasEstudioComponent } from './tecnicas-estudio.component';

describe('TecnicasEstudioComponent', () => {
  let component: TecnicasEstudioComponent;
  let fixture: ComponentFixture<TecnicasEstudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecnicasEstudioComponent]
    });
    fixture = TestBed.createComponent(TecnicasEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
