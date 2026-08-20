import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class DislikeService {

  private readonly dislikedRooms: Room[] = [];

  dislike(room: Room): void {
    const alreadyDisliked = this.dislikedRooms.some(
      dislikedRoom => dislikedRoom.id === room.id
    );

    if (!alreadyDisliked) {
      this.dislikedRooms.push(room);
    }
  }

  getDislikedRooms(): Room[] {
    return this.dislikedRooms;
  }

}
