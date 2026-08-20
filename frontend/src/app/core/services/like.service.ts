import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private readonly likedRooms: Room[] = [];

  like(room: Room): void {
  const alreadyLiked = this.likedRooms.some(
    likedRoom => likedRoom.id === room.id
  );

  if (!alreadyLiked) {
    this.likedRooms.push(room);
  }
}

  getLikedRooms(): Room[] {
    return this.likedRooms;
  }

}
