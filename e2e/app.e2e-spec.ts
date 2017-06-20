import { NodeRestWithAngularPage } from './app.po';

describe('node-rest-with-angular App', () => {
  let page: NodeRestWithAngularPage;

  beforeEach(() => {
    page = new NodeRestWithAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
