import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomViewPasduComponent } from './room-view-pasdu.component';

describe('RoomViewPasduComponent', () => {
  let component: RoomViewPasduComponent;
  let fixture: ComponentFixture<RoomViewPasduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomViewPasduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomViewPasduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
