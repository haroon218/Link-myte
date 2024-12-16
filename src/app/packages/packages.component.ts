import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface FeatureItem {
  icon: string;
  description: string;
}
@Component({
  selector: 'app-packages',
  imports: [CommonModule,],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  features: FeatureItem[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5870638faf4a61165e120c54956e3d5ae8569ac54192847cb5faed0e1c5bc32?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      description: "Create three different cards."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/61fbd4bc7b12546579ff10db0b29e9a7ea142f73e1346edff5b31664f4f21cac?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      description: "Add your photo, contact details, logo and links."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/65b8c908cdc16363ef166162f548f8d65a5581111dc5e106292bd84ec7152bbf?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      description: "Unlimited card sharing."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ea736881c121ce581b80d698e87f7aed14396c88d7338e5ad57e5efb79b5624?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      description: "Keep track of everyone you meet (collect leads)."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bda88cb1b326cde95e29c442b86b4fc927d2edd130ad33738cd6b22671a35a10?placeholderIfAbsent=true&apiKey=b81512dc83464a56bbea3c6885bcf603",
      description: "Unlimited Editing."
    }
  ];

  currentIndex: number = 0; // Index of the current card
  currentTranslate: number = 0;
  startX: number = 0;
  moveX: number = 0;
  threshold: number = 100; // The distance to trigger a swipe action
constructor(private router:Router){}
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.moveX = event.touches[0].clientX;
    this.currentTranslate = this.moveX - this.startX;
  }

  // onTouchEnd() {
  //   if (this.currentTranslate < -this.threshold) {
  //     this.swipeLeft();
  //   } else if (this.currentTranslate > this.threshold) {
  //     this.swipeRight();
  //   } else {
  //     this.resetPosition();
  //   }
  //   this.currentTranslate = 0;
  // }

  // swipeLeft() {
  //   if (this.currentIndex < this.cards.length - 1) {
  //     this.currentIndex++; // Move to the next card
  //   }
  //   this.resetPosition();
  // }
  onContinue(){
    this.router.navigate(['/home']);

  }
  redirectToPage() {
   
    // Redirect to English route

}
  swipeRight() {
    if (this.currentIndex > 0) {
      this.currentIndex--; // Move to the previous card
    }
    this.resetPosition();
  }

  resetPosition() {
    this.currentTranslate = 0;
  }
}


