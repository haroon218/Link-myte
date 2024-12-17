import { Component, EventEmitter, Output } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';
@Component({
  selector: 'app-scanner',
  imports: [],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css'
})
export class ScannerComponent {

  @Output() scanSuccess = new EventEmitter<string>();

  ngAfterViewInit(): void {
    const scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 }, false);
  
    scanner.render(
      (decodedText) => {
        this.scanSuccess.emit(decodedText);
        scanner.clear(); // Stop scanning after success
      },
      (errorMessage) => {
        console.error('QR Code Scan Error:', errorMessage);
      }
    );
  }
  
}