import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektUebersichtComponent } from './projekt-uebersicht.component';

describe('ProjektUebersichtComponent', () => {
  let component: ProjektUebersichtComponent;
  let fixture: ComponentFixture<ProjektUebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektUebersichtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjektUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
