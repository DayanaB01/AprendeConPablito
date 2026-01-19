import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoMedicamentosComponent } from './grupo-medicamentos.component';

describe('GrupoMedicamentosComponent', () => {
  let component: GrupoMedicamentosComponent;
  let fixture: ComponentFixture<GrupoMedicamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoMedicamentosComponent]
    });
    fixture = TestBed.createComponent(GrupoMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
