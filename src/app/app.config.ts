import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { PRIMENG_PRESET } from './utils/constant';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideHotToastConfig(), 
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: PRIMENG_PRESET, options: { darkModeSelector: false }}}),
  ]
};
