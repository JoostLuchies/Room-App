import { Component, inject, OnInit } from '@angular/core';
import { Room } from '../../../../core/models/room.model';
import { DislikeService } from '../../../../core/services/dislike.service';
import { RfRoomCard } from '../../../../shared/components/rf-room-card/rf-room-card';

@Component({
  selector: 'rf-dislikes',
  imports: [RfRoomCard],
  templateUrl: './dislikes.html',
  styleUrl: './dislikes.scss'
})
export class DislikesPage implements OnInit {

  private readonly dislikeService = inject(DislikeService);

  dislikedRooms: Room[] = [];

  ngOnInit(): void {
    this.dislikedRooms = this.dislikeService.getDislikedRooms();
  }

}
