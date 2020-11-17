import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidObjectComponent } from './asteroid-object.component';

describe('AsteroidObjectComponent', () => {
  let component: AsteroidObjectComponent;
  let fixture: ComponentFixture<AsteroidObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
