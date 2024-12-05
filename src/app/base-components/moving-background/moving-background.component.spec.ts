import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBackgroundComponent } from './moving-background.component';

describe('MovingBackgroundComponent', () => {
  let component: MovingBackgroundComponent;
  let fixture: ComponentFixture<MovingBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
