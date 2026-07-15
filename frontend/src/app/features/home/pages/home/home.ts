import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule,
            MatCardModule,
            MatIconButton
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {

}
