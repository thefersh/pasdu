import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPasduComponent } from './sidebar-pasdu.component';

describe('SidebarPasduComponent', () => {
  let component: SidebarPasduComponent;
  let fixture: ComponentFixture<SidebarPasduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPasduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPasduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
