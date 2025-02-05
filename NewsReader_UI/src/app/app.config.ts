import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(),

    { provide: 'API_URL', useValue: 'https://newsapi.org/v2/' },
    { provide: 'API_KEY', useValue:  'aa7437b64c0f4bf7873b4adda6dd7e48'}, provideAnimationsAsync()
  ]


};
