import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralidadesComponent } from './generalidades.component';

describe('GeneralidadesComponent', () => {
  let component: GeneralidadesComponent;
  let fixture: ComponentFixture<GeneralidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralidadesComponent]
    });
    fixture = TestBed.createComponent(GeneralidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
