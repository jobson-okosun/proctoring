import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveNotifications } from './live-notifications';

describe('LiveNotifications', () => {
  let component: LiveNotifications;
  let fixture: ComponentFixture<LiveNotifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveNotifications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveNotifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
