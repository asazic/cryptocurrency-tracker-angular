import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavbarTitle() {
      return element(by.className('navbar-brand')).getText() as Promise<string>;
  }
}
