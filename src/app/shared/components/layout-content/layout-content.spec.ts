import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutContent } from './layout-content';

describe('AppLayoutContent', () => {
  let component: AppLayoutContent;
  let fixture: ComponentFixture<AppLayoutContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLayoutContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLayoutContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
