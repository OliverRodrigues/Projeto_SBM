import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmrComponent } from './rmr.component';

describe('RmrComponent', () => {
  let component: RmrComponent;
  let fixture: ComponentFixture<RmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
