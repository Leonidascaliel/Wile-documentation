import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRastreabilidadeComponent } from './pre-rastreabilidade.component';

describe('PreRastreabilidadeComponent', () => {
  let component: PreRastreabilidadeComponent;
  let fixture: ComponentFixture<PreRastreabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreRastreabilidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreRastreabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
