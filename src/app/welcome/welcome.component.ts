import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  isLoading: boolean = true;
  constructor(private router: Router) {
    
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Show the loading screen for 2 seconds
  }
  redirectToPage(language: string) {
    if (language === 'english') {
      // Redirect to English route
      this.router.navigate(['/sign-in']);
    } else if (language === 'arabic') {
      // Redirect to Arabic route
      this.router.navigate(['/sign-in']);
    }
  }
}
