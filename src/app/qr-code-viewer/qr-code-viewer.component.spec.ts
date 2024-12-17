import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeViewerComponent } from './qr-code-viewer.component';

describe('QrCodeViewerComponent', () => {
  let component: QrCodeViewerComponent;
  let fixture: ComponentFixture<QrCodeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCodeViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
