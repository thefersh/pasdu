import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePasduComponent } from './home-pasdu.component';

describe('HomePasduComponent', () => {
  let component: HomePasduComponent;
  let fixture: ComponentFixture<HomePasduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePasduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePasduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
