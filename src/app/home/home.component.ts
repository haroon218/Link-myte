import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards:any=[]
constructor(private authService:AuthService){
this.getCards()
}
getCards(){
  this.authService.getcardListing().subscribe({
    next: (data) => {
      debugger
      console.log(data);
      this.cards=data.data.data;
    }
  })
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