import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verify',
  imports: [CommonModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
  email: any;
  isLoading:boolean=false
  otpValues: string[] = ['', '', '', ''];
  @ViewChildren('otp0, otp1, otp2, otp3') otpInputs!: QueryList<ElementRef>;
  timer: number = 60; // 60 seconds
  formattedTime: string = '01:00';
  intervalId: any;
  constructor(private router: Router, private route: ActivatedRoute,private authService:AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      console.log('Email:', this.email);
    });
    this.startTimer();
  }
  ngOnDestroy(): void {
    // Clear the timer on component destruction
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Start the countdown timer
  startTimer(): void {
    this.updateFormattedTime(); // Initial format

    this.intervalId = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        this.updateFormattedTime();
      } else {
        clearInterval(this.intervalId); // Stop the timer at 0
      }
    }, 1000);
  }

  // Update the formatted time for display
  private updateFormattedTime(): void {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;

    this.formattedTime = `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }

  // Add leading zero to single-digit numbers
  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
  // Handle input event
  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    this.otpValues[index] = input.value;

    if (input.value.length === 1 && index < this.otpInputs.length - 1) {
      this.focusInput(index + 1);
    }
  }

  // Handle keydown event
  onKeyDown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && index > 0 && input.value === '') {
      this.focusInput(index - 1);
      this.otpValues[index] = ''; // Clear the current input value
    }
  }

  // Focus on a specific input
  private focusInput(index: number): void {
    const inputsArray = this.otpInputs.toArray();
    inputsArray[index].nativeElement.focus();
  }

  // Check if all OTP fields are filled
  isOtpComplete(): boolean {
    return this.otpValues.every((value) => value.length === 1);
  }

  // Redirect to another page
  verifyOtp(): void {
    if (this.isOtpComplete()) {
      const otpCode = this.otpValues.join(''); // Get the OTP code
      const requestData = {
        email: this.email,
        code: otpCode,
      };
      this.isLoading = true;
  
      // API call to verify the OTP
      this.authService.verifyCode(requestData).subscribe(
        (response) => {
          if (response.success) {
            this.checkPackage(); // Call checkPackage to decide navigation
          } else {
            this.isLoading = false;
          }
          console.log('OTP Verified Successfully:', response);
        },
        (error) => {
          this.isLoading = false;
          console.error('OTP Verification Failed:', error);
        }
      );
    }
  }
  
  checkPackage(): void {
    this.authService.checkPackage().subscribe({
      next: (data) => {
        this.isLoading = false;
        if (data) { // If there is any data returned
          this.router.navigate(['/link-myte/home']); // Navigate to home
        } else {
          this.router.navigate(['/packages']); // Navigate to packages otherwise
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error checking package:', error);
      },
    });
  }
  
  // Redirect to another page
  redirectToPage(): void {
    this.verifyOtp(); // Call verify OTP function when redirecting
  }
}