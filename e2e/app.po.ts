export class TodayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('today-app p')).getText();
  }
}
