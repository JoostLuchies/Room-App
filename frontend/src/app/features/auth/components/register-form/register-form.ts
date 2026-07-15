import { Component, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRole } from '../../../../core/models/user-role';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  private readonly formBuilder = inject(FormBuilder);

  role = input<UserRole | undefined>();

  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],

    lastName: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],

    password: ['', [Validators.required, Validators.minLength(8)]],

    budget: [
    null
  ],

  location: [
    ''
  ],

  availableFrom: [
    ''
  ]

  });

  submit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
