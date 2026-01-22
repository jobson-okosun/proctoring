import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import Mfa from './mfa';

describe('Mfa', () => {
  let component: Mfa;
  let fixture: ComponentFixture<Mfa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mfa],
      providers: [provideZonelessChangeDetection(), provideRouter([]), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
