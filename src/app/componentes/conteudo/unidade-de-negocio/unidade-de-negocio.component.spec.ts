import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeDeNegocioComponent } from './unidade-de-negocio.component';

describe('UnidadeDeNegocioComponent', () => {
  let component: UnidadeDeNegocioComponent;
  let fixture: ComponentFixture<UnidadeDeNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeDeNegocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeDeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
