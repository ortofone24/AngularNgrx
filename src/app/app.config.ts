import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/state/counter/counter.reducer';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { postReducer } from './posts/state/posts.reducer';
import { appReducer } from './app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    /*provideStore(appReducer),*/
    provideStore(),
    //provideStore({
    //  counterState: counterReducer,
    //  postsState: postReducer
    //}),
    //provideState(
    //  { name: 'counterState', reducer: counterReducer }
    //),
    //provideState(
    //  { name: 'postsState', reducer: postReducer }
    //),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true,
      }
    }),
  ]
};
