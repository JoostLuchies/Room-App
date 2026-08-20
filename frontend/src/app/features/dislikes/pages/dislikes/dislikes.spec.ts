import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislikes } from './dislikes';

describe('Dislikes', () => {
  let component: Dislikes;
  let fixture: ComponentFixture<Dislikes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dislikes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dislikes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
