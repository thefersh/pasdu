import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPasduComponent } from './navbar-pasdu.component';

describe('NavbarPasduComponent', () => {
  let component: NavbarPasduComponent;
  let fixture: ComponentFixture<NavbarPasduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPasduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPasduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
