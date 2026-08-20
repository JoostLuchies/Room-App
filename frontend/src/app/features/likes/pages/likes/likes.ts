import { Component, inject, OnInit } from '@angular/core';
import { Room } from '../../../../core/models/room.model';
import { LikeService } from '../../../../core/services/like.service';
import { RfRoomCard } from '../../../../shared/components/rf-room-card/rf-room-card';

@Component({
  selector: 'rf-likes',
  standalone: true,
  imports: [RfRoomCard],
  templateUrl: './likes.html',
  styleUrl: './likes.scss',
})
export class LikesPage {
  private readonly likeService = inject(LikeService);


  likedRooms: Room[] = [];

  ngOnInit(): void {
    this.likedRooms = this.likeService.getLikedRooms();
  }
}
