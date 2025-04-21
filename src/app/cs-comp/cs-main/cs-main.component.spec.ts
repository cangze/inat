import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsMainComponent } from './cs-main.component';

describe('CsMainComponent', () => {
  let component: CsMainComponent;
  let fixture: ComponentFixture<CsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
