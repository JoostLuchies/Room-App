import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { RoomService } from '../../../../core/services/room.service';
import { Room } from '../../../../core/models/room.model';
import { RfRoomCard } from '../../../../shared/components/rf-room-card/rf-room-card';
import { LikeService } from '../../../../core/services/like.service';
import { DislikeService } from '../../../../core/services/dislike.service';

@Component({
  selector: 'rf-swipe',
  imports: [RfRoomCard, MatButtonModule],
  templateUrl: './swipe.html',
  styleUrl: './swipe.scss',
})

export class SwipePage implements OnInit {

  private readonly roomService = inject(RoomService);
  private readonly likeService = inject(LikeService);
  private readonly dislikeService = inject(DislikeService);
  rooms: Room[] = [];

  currentRoomIndex = 0;

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  get currentRoom(): Room | undefined {
    return this.rooms[this.currentRoomIndex];
  }

  like(): void {
    if (this.currentRoom) {
      this.likeService.like(this.currentRoom);
    }
    this.nextRoom();
}

dislike(): void {
  if (this.currentRoom) {
    this.dislikeService.dislike(this.currentRoom);
  }
  this.nextRoom();
}

private nextRoom(): void {
  this.currentRoomIndex++;
}

}
