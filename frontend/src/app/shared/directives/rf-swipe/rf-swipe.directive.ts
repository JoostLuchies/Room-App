import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[rfSwipe]'
})
export class RfSwipeDirective {

  //outputs
  swipeRight = output<void>();
  swipeLeft = output<void>();
  positionChange = output<number>();

  private isDragging = false;
  private startX = 0;

  positionX = 0;

  private readonly swipeThreshold = 150;

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.isDragging) return;

    this.positionX = event.clientX - this.startX;
    this.positionChange.emit(this.positionX);
  }

  @HostListener('pointerup')
  onPointerUp(): void {
    this.isDragging = false;

    if (this.positionX > this.swipeThreshold) {
      this.swipeRight.emit();
    } else if (this.positionX < -this.swipeThreshold) {
      this.swipeLeft.emit();
    }

    this.positionX = 0;
    this.positionChange.emit(0);
  }

  @HostListener('pointercancel')
  onPointerCancel(): void {
    this.isDragging = false;
    this.positionX = 0;
  }

}
