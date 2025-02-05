import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnifywnR4OEp0s2xmb3_iBK0k1OKCIo7w",
  authDomain: "newsreader-1ddfa.firebaseapp.com",
  projectId: "newsreader-1ddfa",
  storageBucket: "newsreader-1ddfa.firebasestorage.app",
  messagingSenderId: "52148472262",
  appId: "1:52148472262:web:cf3812b4985ef30a880ac7",
  measurementId: "G-Y7STVV6QNV"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(),

    { provide: 'API_URL', useValue: 'https://newsapi.org/v2/' },
    { provide: 'API_KEY', useValue:  'aa7437b64c0f4bf7873b4adda6dd7e48'}, provideAnimationsAsync()
  ]


};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
