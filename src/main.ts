import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularfireSandboxAppComponent, environment } from './app';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularfireSandboxAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://angularfire-sandbox.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
  })
]);
