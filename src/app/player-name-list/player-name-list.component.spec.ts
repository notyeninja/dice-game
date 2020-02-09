import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNameListComponent } from './player-name-list.component';

describe('PlayerNameListComponent', () => {
  let component: PlayerNameListComponent;
  let fixture: ComponentFixture<PlayerNameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerNameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
