import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[rfSwipe]'
})
export class RfSwipeDirective {

  //outputs
  swipeRight = output<void>();
  swipeLeft = output<void>();
  positionChange = output<number>();
  animationChange = output<boolean>();
  rotationChange = output<number>();
  positionYChange = output<number>();
  swipeProgressChange = output<number>();


  private isDragging = false;
  private startX = 0;
  private isAnimating = false;
  private hasDragged = false;
  private swipeDirection: 'right' | 'left' | null = null;

  positionX = 0;

  private readonly swipeThreshold = 350;

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    this.isAnimating = false;
    this.isDragging = true;
    this.startX = event.clientX;
    this.hasDragged = false;
    this.swipeDirection = null;
    this.animationChange.emit(false);
    this.rotationChange.emit(0);
    this.positionYChange.emit(0);
    this.swipeProgressChange.emit(0);
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.isDragging) return;

    this.positionX = event.clientX - this.startX;

    const swipeProgress = Math.max(
      -1,
      Math.min(1, this.positionX / this.swipeThreshold)
    );

    const positionY = this.positionX < 0
    ? Math.min(Math.abs(this.positionX) * 0.1, 150)
    : -Math.min(this.positionX * 0.1, 150);

    const rotation = Math.max(
      -10,
      Math.min(10, this.positionX / 25)
      );

     if (Math.abs(this.positionX) > 0) {
    this.hasDragged = true;
  }

    this.positionChange.emit(this.positionX);
    this.rotationChange.emit(rotation);
    this.positionYChange.emit(positionY);
    this.swipeProgressChange.emit(swipeProgress);

  }

  @HostListener('pointerup')
  onPointerUp(): void {
    this.isDragging = false;

    if (this.positionX > this.swipeThreshold) {
      this.swipeDirection = 'right';
      this.isAnimating = true;
      this.animationChange.emit(true);

      this.positionX = window.innerWidth;
      this.positionChange.emit(this.positionX);
      return;
    }

    else if (this.positionX < -this.swipeThreshold) {
      this.swipeDirection = 'left';
      this.isAnimating = true;
      this.animationChange.emit(true);

      this.positionX = -window.innerWidth;
      this.positionChange.emit(this.positionX);
      return;
    }

    this.swipeDirection = null;
    this.isAnimating = true;
    this.animationChange.emit(true);

    this.positionX = 0;
    this.positionChange.emit(0);
    this.rotationChange.emit(0);
    this.positionYChange.emit(0);
    this.swipeProgressChange.emit(0);
  }

  @HostListener('pointercancel')
  onPointerCancel(): void {
    this.isDragging = false;
    this.positionX = 0;
  }

  @HostListener('transitionend')
  onTransitionEnd(): void {
  if (!this.isAnimating) return;

  this.isAnimating = false;
  this.animationChange.emit(false);
  this.rotationChange.emit(0);
  this.positionYChange.emit(0);
  this.swipeProgressChange.emit(0);

  if (this.swipeDirection === 'left') {
    this.swipeLeft.emit();
  }

  if (this.swipeDirection === 'right') {
    this.swipeRight.emit();
  }

  this.swipeDirection = null;
}

}
