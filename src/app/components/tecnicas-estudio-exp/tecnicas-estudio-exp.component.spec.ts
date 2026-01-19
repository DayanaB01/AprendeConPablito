import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicasEstudioExpComponent } from './tecnicas-estudio-exp.component';

describe('TecnicasEstudioExpComponent', () => {
  let component: TecnicasEstudioExpComponent;
  let fixture: ComponentFixture<TecnicasEstudioExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecnicasEstudioExpComponent]
    });
    fixture = TestBed.createComponent(TecnicasEstudioExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
