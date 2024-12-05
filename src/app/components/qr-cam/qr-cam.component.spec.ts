import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCamComponent } from './qr-cam.component';

describe('QrCamComponent', () => {
  let component: QrCamComponent;
  let fixture: ComponentFixture<QrCamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
