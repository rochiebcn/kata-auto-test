import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getTitlePage() {
    return browser.getTitle();
  }

  getTabFormValidation() {
    return element(by.id('formValidationTab'));
  }

  countMatTabElements() {
    // the mat-tab element in the DOM is translated as mat-tab-body
    return element.all(by.tagName('mat-tab-body')).count();
  }
}
