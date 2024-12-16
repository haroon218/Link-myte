import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
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
}