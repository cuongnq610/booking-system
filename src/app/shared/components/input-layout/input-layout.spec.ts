import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputLayout } from './input-layout';

describe('AppInputLayout', () => {
  let component: AppInputLayout;
  let fixture: ComponentFixture<AppInputLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInputLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInputLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
