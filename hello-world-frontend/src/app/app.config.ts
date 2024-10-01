import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; //ApplicationConfig defines overall configuration of Angular application, 
import { provideRouter } from '@angular/router'; //sets up routing in a standalone angular app.
import { provideHttpClient } from '@angular/common/http'; //enables ability to make HTTP requests from within application
import { routes } from './app.routes'; //contains paths and components that defines the app's navigation

export const appConfig: ApplicationConfig = { //exports an appConfig that is the configuration for the whole app.
  providers:[
    provideZoneChangeDetection({ eventCoalescing: true }),  //Zone.js detects and responds to UI changes, and eventCoalescing combines multiple events that happen in a short span of time together.
    provideRouter(routes), //sets up router, responsible for navigation and URL changes
    provideHttpClient(),] //enables HTTP requests
};

