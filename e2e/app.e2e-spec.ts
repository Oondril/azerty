import { AzertyPage } from './app.po';

describe('azerty App', () => {
  let page: AzertyPage;

  beforeEach(() => {
    page = new AzertyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
