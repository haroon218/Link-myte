import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isLoadingt: boolean = true;
  loginForm: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder,private router:Router,private authService:AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoadingt = false;
    }, 2000); // Show the loading screen for 2 seconds
  }
  onSubmit() {
    if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched()
      return;
    }
this.isLoading=true
    const data={
      email : this.loginForm.value.email
    } 
   

   this.authService.login(data).
      subscribe(
        (response: any) => {
          if(response.success){
            debugger
            this.isLoading=false
            localStorage.setItem('token',response.data.token)
            this.redirectToPage()
          }
        
          // Handle success, e.g., navigate to another page or store token
          console.log('Login success:', response);
        },
        (error) => {
;            this.isLoading=false

        }
      );
  }
  redirectToPage() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
        return;
      }
    // Redirect to '/verify' route with email as query parameter
    this.router.navigate(['/verify'], { queryParams: { email: this.loginForm.value.email } });
  }
  
}
