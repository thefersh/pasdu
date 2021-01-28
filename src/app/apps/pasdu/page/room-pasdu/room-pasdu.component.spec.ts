import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPasduComponent } from './room-pasdu.component';

describe('RoomPasduComponent', () => {
  let component: RoomPasduComponent;
  let fixture: ComponentFixture<RoomPasduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPasduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPasduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
