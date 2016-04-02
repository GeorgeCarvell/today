import { TodayPage } from './app.po';

describe('today App', function() {
  let page: TodayPage;

  beforeEach(() => {
    page = new TodayPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('today Works!');
  });
});
