import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedIn } from './signed-in';

describe('SignedIn', () => {
  let component: SignedIn;
  let fixture: ComponentFixture<SignedIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignedIn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignedIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
