import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTermsComponent } from './index-terms.component';

describe('IndexTermsComponent', () => {
  let component: IndexTermsComponent;
  let fixture: ComponentFixture<IndexTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
