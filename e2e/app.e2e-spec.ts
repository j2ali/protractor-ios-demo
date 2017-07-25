import { ProtractorDemoIosPage } from './app.po';

describe('protractor-demo-ios App', () => {
  let page: ProtractorDemoIosPage;

  beforeEach(() => {
    page = new ProtractorDemoIosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.text_box().sendKeys('This is a test');
    page.text_box().sendKeys('Test 3');
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
