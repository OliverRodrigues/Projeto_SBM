import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrntEstrategicaComponent } from './frnt-estrategica.component';

describe('FrntEstrategicaComponent', () => {
  let component: FrntEstrategicaComponent;
  let fixture: ComponentFixture<FrntEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrntEstrategicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrntEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
