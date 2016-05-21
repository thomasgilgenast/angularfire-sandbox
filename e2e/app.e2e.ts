import { AngularfireSandboxPage } from './app.po';

describe('angularfire-sandbox App', function() {
  let page: AngularfireSandboxPage;

  beforeEach(() => {
    page = new AngularfireSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angularfire-sandbox works!');
  });
});
