import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasduLayoutComponent } from './pasdu-layout.component';

describe('PasduLayoutComponent', () => {
  let component: PasduLayoutComponent;
  let fixture: ComponentFixture<PasduLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasduLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasduLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
