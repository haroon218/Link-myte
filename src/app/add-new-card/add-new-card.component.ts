import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-new-card',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './add-new-card.component.html',
  styleUrl: './add-new-card.component.css'
})
export class AddNewCardComponent {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      cardTitle: ['', Validators.required],
      name: ['', Validators.required],
      company: ['', Validators.required],
      job: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9-+()]*$')]]
    });
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      console.log(this.cardForm.value);
    }
  }
}
