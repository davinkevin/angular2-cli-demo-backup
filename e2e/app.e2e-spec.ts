import { Angular2CliDemoBackupPage } from './app.po';

describe('angular2-cli-demo-backup App', function() {
  let page: Angular2CliDemoBackupPage;

  beforeEach(() => {
    page = new Angular2CliDemoBackupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
