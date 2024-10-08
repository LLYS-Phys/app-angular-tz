import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), 
    provideFirebaseApp(() => initializeApp({"projectId":"app-angular-89ba4","appId":"1:301664781185:web:9d2ea2b29897bfc0549e80","storageBucket":"app-angular-89ba4.appspot.com","apiKey":"AIzaSyCOIfsyqbOcNbFJ1H61xBGJgTVW2D0lwSY","authDomain":"app-angular-89ba4.firebaseapp.com","messagingSenderId":"301664781185","measurementId":"G-B36JMYS9Z3"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideAnimationsAsync()]
};
