import { SifUiPage } from './app.po';

describe('sif-ui App', () => {
  let page: SifUiPage;

  beforeEach(() => {
    page = new SifUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
