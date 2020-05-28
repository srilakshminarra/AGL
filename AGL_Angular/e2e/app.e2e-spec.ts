import { e2eTest } from './app.po';

describe('AGL Test App ', function() {
  let page: e2eTest;
  const title = `An alphabetical display of cat names ordered by owner's gender`;

  beforeEach(() => {
    page = new e2eTest();
    page.navigateTo();
  });

  it('should display message saying app title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(title);
  });

  it('should display a list of 4 male owned cats', () => {
    page.navigateTo();
    expect(page.getMaleOwnedCatsElements().count()).toEqual(4);
  });

  it('should display showing the cats name is not `Maximus`', () => {
    page.navigateTo();
    expect(page.getMaleOwnedCatText('0')).not.toEqual('Maximus');
  });

  it('should display a list of 3 female owned cats', () => {
    page.navigateTo();
    expect(page.getFemaleOwnedCatsElements().count()).toEqual(3);
  });

});


describe(' Sorting the  order of male owned cat names', function() {
  let page: e2eTest;

  beforeEach(() => {
    page = new e2eTest();
    page.navigateTo();
  });
  
  it(' Displays the ascending order of male owned cat names  ', () => {
    expect(page.getMaleOwnedCatText('0')).toEqual('Garfield');
    expect(page.getMaleOwnedCatText('1')).toEqual('Jim');
    expect(page.getMaleOwnedCatText('2')).toEqual('Max');
    expect(page.getMaleOwnedCatText('3')).toEqual('Tom');
  });
  
});



describe('Sorting the order of female owned cat names', function() {
  let page: e2eTest;

  beforeEach(() => {
    page = new e2eTest();
    page.navigateTo();
  });
  
  it('Displays the ascending order of female owned cat names', () => {
    expect(page.getFemaleOwnedCatText('0')).toEqual('Garfield');
    expect(page.getFemaleOwnedCatText('1')).toEqual('Simba');
    expect(page.getFemaleOwnedCatText('2')).toEqual('Tabby');
  });
  
});



