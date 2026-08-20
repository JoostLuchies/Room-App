import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRole } from '../../../../core/models/user-role';

import { RegisterForm } from '../../components/register-form/register-form';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'rf-register',
  imports: [MatButtonModule, RegisterForm],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterPage {
  private route = inject(ActivatedRoute);

  role = this.route.snapshot.paramMap.get('role') as UserRole | undefined;
}
