import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFounderComponent } from './cs-founder.component';

describe('CsFounderComponent', () => {
  let component: CsFounderComponent;
  let fixture: ComponentFixture<CsFounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsFounderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
