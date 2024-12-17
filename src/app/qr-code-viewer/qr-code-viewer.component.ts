import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import QRCode from 'qrcode';
import { AuthService } from '../services/auth.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-qr-code-viewer',
  imports: [],
  templateUrl: './qr-code-viewer.component.html',
  styleUrl: './qr-code-viewer.component.css'
})
export class QrCodeViewerComponent {
  url:any
  qrCodeImage:any
  qrCodeUrl:any
constructor(private activatedRoute: ActivatedRoute,private authService:AuthService,private location:Location) {}

ngOnInit() {
  // Retrieve the 'qrcode' query parameter from the URL
  this.activatedRoute.queryParams.subscribe(params => {
    this.qrCodeUrl = params['qrcode'] || '';
    const baseUrl = 'https://linkmyte.ai/qrcode-generate';
    this.qrCodeImage = `${baseUrl}?short_code=${this.qrCodeUrl}`;
    console.log(this.qrCodeImage)
    // this.generateQrCode(this.qrCodeUrl);
      // If no QR code is passed, default to an empty string
  });
}
generateQrCode(link:any): void {
  const params:any ={
    short_link:link
  }
this.authService.getQr(params).subscribe({
  next: (data) => {
    debugger
this.qrCodeImage=data.data
  }
})
}
goBack() {
  this.location.back();
}
getqr(){
  const url:any=localStorage.getItem('qr')
  debugger
  this.qrCodeImage =  this.generateQrCode(url);
  this.url=url
}

}
