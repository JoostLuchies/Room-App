import { Component, input, output } from '@angular/core';
import { Room } from '../../../core/models/room.model';
import { RfSwipeDirective } from '../../directives/rf-swipe/rf-swipe.directive';

@Component({
  selector: 'rf-room-card',
  standalone: true,
  imports: [RfSwipeDirective],
  templateUrl: './rf-room-card.html',
  styleUrl: './rf-room-card.scss'
})



export class RfRoomCard {

  readonly room = input.required<Room>();

  // properties
  positionX = 0;

  // outputs
  swipeRight = output<void>();
  swipeLeft = output<void>();

  onPositionChange(positionX: number): void {
  this.positionX = positionX;
}
}
