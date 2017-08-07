import { VeParkPage } from './app.po';

describe('ve-park App', function() {
  let page: VeParkPage;

  beforeEach(() => {
    page = new VeParkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
