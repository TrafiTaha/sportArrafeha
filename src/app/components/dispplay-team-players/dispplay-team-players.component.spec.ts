import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispplayTeamPlayersComponent } from './dispplay-team-players.component';

describe('DispplayTeamPlayersComponent', () => {
  let component: DispplayTeamPlayersComponent;
  let fixture: ComponentFixture<DispplayTeamPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispplayTeamPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispplayTeamPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
