import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
var prompt;
window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  prompt = e;
  console.log('beforeinstallprompt fired!');
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
