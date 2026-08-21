import { Component, input, output, effect } from '@angular/core';
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
  isAnimating = false;
  rotation = 0;
  positionY = 0;


  // outputs
  swipeRight = output<void>();
  swipeLeft = output<void>();
  swipeProgressChange = output<number>();

  constructor() {
  effect(() => {
    this.room();

    this.positionX = 0;
    this.isAnimating = false;
  });
}

  onPositionChange(positionX: number): void {
    this.positionX = positionX;
  }

  onAnimationChange(isAnimating: boolean): void {
    this.isAnimating = isAnimating;
  }

  onRotationChange(rotation: number): void {
    this.rotation = rotation;
  }

  onPositionYChange(positionY: number): void {
    this.positionY = positionY;
  }

  onSwipeProgressChange(swipeProgress: number): void {
    this.swipeProgressChange.emit(swipeProgress);
  }



}
