import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularfireSandboxAppComponent } from '../app/angularfire-sandbox.component';

beforeEachProviders(() => [AngularfireSandboxAppComponent]);

describe('App: AngularfireSandbox', () => {
  it('should create the app',
      inject([AngularfireSandboxAppComponent], (app: AngularfireSandboxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angularfire-sandbox works!\'',
      inject([AngularfireSandboxAppComponent], (app: AngularfireSandboxAppComponent) => {
    expect(app.title).toEqual('angularfire-sandbox works!');
  }));
});
