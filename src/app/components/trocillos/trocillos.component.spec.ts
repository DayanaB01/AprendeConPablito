import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocillosComponent } from './trocillos.component';

describe('TrocillosComponent', () => {
  let component: TrocillosComponent;
  let fixture: ComponentFixture<TrocillosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrocillosComponent]
    });
    fixture = TestBed.createComponent(TrocillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
