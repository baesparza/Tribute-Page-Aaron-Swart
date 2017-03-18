import { AaronPage } from './app.po';

describe('aaron App', () => {
  let page: AaronPage;

  beforeEach(() => {
    page = new AaronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
