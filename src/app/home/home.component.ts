import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import QRCode from 'qrcode';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards:any=[]
  qrCode:any
constructor(private authService:AuthService,private router:Router){
this.getCards()
}
getCards(): void {
  this.authService.getcardListing().subscribe({
    next: async (data) => {
      console.log(data);
      debugger
      // Loop through cards and generate a QR code for each one
      this.cards =data.data.data;
       this.generateQrCode(this.cards[0].short_code)
     
    },
    error: (error) => {
      console.error('Error fetching cards:', error);
    }
  });
}
generateQrCode(link:any): void {
  const params:any ={
    short_link:link
  }
this.authService.getQr(params).subscribe({
  next: (data) => {
    debugger
this.qrCode=data.data
  }
})
}
generateCardUrl(cardId: string): string {
 
  return `${encodeURIComponent(cardId)}`;
}

selectedQrCode: string = '';
isModalOpen: boolean = false;
// Method to open the modal with the selected QR code
openModal(qrCodeUrl: any): void {
  // Pass QR code URL as a query parameter to the new route
  this.router.navigate(['/link-myte/qrcode'], {
    queryParams: { qrcode: qrCodeUrl }
  });
}

// Method to close the modal
closeModal(): void {
  this.isModalOpen = false;
}
currentIndex = 0;

  // Navigate to next card
  goToNext() {
    debugger
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first card
    }
  }

  // Navigate to previous card
  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.cards.length - 1; // Loop back to the last card
    }
  }
}