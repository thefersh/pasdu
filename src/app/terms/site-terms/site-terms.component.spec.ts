import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTermsComponent } from './site-terms.component';

describe('SiteTermsComponent', () => {
  let component: SiteTermsComponent;
  let fixture: ComponentFixture<SiteTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
