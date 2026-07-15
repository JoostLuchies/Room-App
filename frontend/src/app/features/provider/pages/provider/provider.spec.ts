import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landlord } from './provider';

describe('Landlord', () => {
  let component: Landlord;
  let fixture: ComponentFixture<Landlord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landlord],
    }).compileComponents();

    fixture = TestBed.createComponent(Landlord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
