import { browser, by, element } from 'protractor';

export class ProtractorDemoIosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  text_box() {
    return element(by.css('#box1'));
  }
}
