import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
  redirectToPage() {
   
      // Redirect to English route
      this.router.navigate(['/verify']);
  
  }
}
