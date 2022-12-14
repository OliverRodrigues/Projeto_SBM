import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoFrenteEstrategicaComponent } from './detalhamento-frente-estrategica.component';

describe('DetalhamentoFrenteEstrategicaComponent', () => {
  let component: DetalhamentoFrenteEstrategicaComponent;
  let fixture: ComponentFixture<DetalhamentoFrenteEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhamentoFrenteEstrategicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhamentoFrenteEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
