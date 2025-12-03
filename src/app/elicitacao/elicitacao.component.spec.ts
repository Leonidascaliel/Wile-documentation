import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElicitacaoComponent } from './elicitacao.component';

describe('ElicitacaoComponent', () => {
  let component: ElicitacaoComponent;
  let fixture: ComponentFixture<ElicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElicitacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
