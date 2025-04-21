import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsErrorComponent } from './cs-error.component';

describe('CsErrorComponent', () => {
  let component: CsErrorComponent;
  let fixture: ComponentFixture<CsErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
