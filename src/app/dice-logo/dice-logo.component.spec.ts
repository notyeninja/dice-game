import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceLogoComponent } from './dice-logo.component';

describe('DiceLogoComponent', () => {
  let component: DiceLogoComponent;
  let fixture: ComponentFixture<DiceLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
