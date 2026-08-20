import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { RoomService } from '../../../../core/services/room.service';
import { Room } from '../../../../core/models/room.model';
import { RfRoomCard } from '../../../../shared/components/rf-room-card/rf-room-card';

@Component({
  selector: 'rf-home',
  imports: [MatButtonModule, MatCardModule, MatIconButton, RouterLink, RfRoomCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class HomePage implements OnInit {

  private readonly roomService = inject(RoomService);

  rooms: Room[] = [];

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

}
