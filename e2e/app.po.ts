export class AngularfireSandboxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angularfire-sandbox-app h1')).getText();
  }
}
