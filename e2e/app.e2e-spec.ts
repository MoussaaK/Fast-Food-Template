import { FastFoodPage } from './app.po';

describe('fast-food App', () => {
  let page: FastFoodPage;

  beforeEach(() => {
    page = new FastFoodPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
