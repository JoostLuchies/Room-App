import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  imports: [
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterPage {
 private route = inject(ActivatedRoute);

  role = this.route.snapshot.paramMap.get('role');
}
