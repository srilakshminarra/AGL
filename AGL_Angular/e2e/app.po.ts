import { browser, element, by } from 'protractor';

export class e2eTest {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getDescRadioButtonElement() {
    return element.all(by.id('desc'));
  }

   getMaleOwnedCatsElements() {
     return element.all(by.css('.male-cats'));
   }

  getMaleOwnedCatText(index: string) {
    return element(by.css('#male-cats' + index)).getText();
    
  }

  getFemaleOwnedCatText(index: string) {
    return element(by.css('#female-cats' + index)).getText();
    
  }

  getFemaleOwnedCatsElements() {
    return element.all(by.css('.female-cats'));
  }


}
