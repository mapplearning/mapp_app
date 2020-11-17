import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidGamePageComponent } from './asteroid-game-page.component';

describe('AsteroidGamePageComponent', () => {
  let component: AsteroidGamePageComponent;
  let fixture: ComponentFixture<AsteroidGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidGamePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
