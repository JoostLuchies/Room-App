import { Component, input } from '@angular/core';
import { Room } from '../../../core/models/room.model';

@Component({
  selector: 'rf-room-card',
  standalone: true,
  imports: [],
  templateUrl: './rf-room-card.html',
  styleUrl: './rf-room-card.scss'
})
export class RfRoomCard {

  readonly room = input.required<Room>();

}
