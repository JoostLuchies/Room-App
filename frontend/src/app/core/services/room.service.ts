import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly rooms: Room[] = [
    {
      id: 1,
      title: 'Kamer nabij centrum',
      city: 'Groningen',
      price: 650,
      imageUrl: 'https://picsum.photos/600/400?random=1',
      availableFrom: '2026-09-01',
      description: 'Ruime kamer op loopafstand van het centrum.'
    },
    {
      id: 2,
      title: 'Studio in Assen',
      city: 'Assen',
      price: 720,
      imageUrl: 'https://picsum.photos/600/400?random=2',
      availableFrom: '2026-08-15',
      description: 'Zelfstandige studio met eigen keuken en badkamer.'
    },
    {
      id: 3,
      title: 'Studentenkamer',
      city: 'Leeuwarden',
      price: 495,
      imageUrl: 'https://picsum.photos/600/400?random=3',
      availableFrom: '2026-10-01',
      description: 'Gezellige kamer in een studentenhuis.'
    }
  ];

  getRooms(): Observable<Room[]> {
    return of(this.rooms);
  }

}
