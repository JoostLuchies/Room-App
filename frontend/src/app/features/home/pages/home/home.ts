import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule,
            MatCardModule,
            MatIconButton,
            RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {

}
