import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-new-card',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './add-new-card.component.html',
  styleUrl: './add-new-card.component.css'
})
export class AddNewCardComponent {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder,private cardService:AuthService) {
    this.cardForm = this.fb.group({
      job_title: ['', Validators.required],
      first_name: ['', Validators.required],
      // company: ['', Validators.required],
      mobile: ['', Validators.required],
      whatsup_number: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      this.cardService.createCard(this.cardForm.value).subscribe({
        next: (response) => {
          console.log('Card created successfully:', response);
          alert('Card created successfully!');
          this.cardForm.reset(); // Reset the form
        },
        error: (error) => {
          console.error('Error occurred:', error);
          alert('Failed to create card. Try again later.');
        },
      });
    } else {
      alert('Form is invalid. Please fill all required fields.');
    }
  }
}
