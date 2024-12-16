import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  imports: [],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
  constructor(private router: Router) {}

  redirectToPage() {
   
      // Redirect to English route
      this.router.navigate(['/packages']);
  
  }
}
