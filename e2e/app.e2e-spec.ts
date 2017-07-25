import { ProtractorDemoIosPage } from './app.po';

describe('protractor-demo-ios App', () => {
  let page: ProtractorDemoIosPage;

  beforeEach(() => {
    page = new ProtractorDemoIosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
