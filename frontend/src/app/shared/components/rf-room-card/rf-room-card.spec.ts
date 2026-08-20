import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfRoomCard } from './rf-room-card';

describe('RfRoomCard', () => {
  let component: RfRoomCard;
  let fixture: ComponentFixture<RfRoomCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfRoomCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfRoomCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
