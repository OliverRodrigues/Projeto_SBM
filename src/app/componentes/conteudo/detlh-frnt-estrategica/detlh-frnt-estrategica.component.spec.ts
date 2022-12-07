import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetlhFrntEstrategicaComponent } from './detlh-frnt-estrategica.component';

describe('DetlhFrntEstrategicaComponent', () => {
  let component: DetlhFrntEstrategicaComponent;
  let fixture: ComponentFixture<DetlhFrntEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetlhFrntEstrategicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetlhFrntEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
