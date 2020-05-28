
import { TestBed, async, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AGLTest } from '../dataservices/owners-and-animals.service';
import { Pipe, PipeTransform } from '@angular/core';
import { CatlistComponent } from './cat-listing.component';


@Pipe({name: 'sortCats'})
class MockPipe implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}

describe('Cat listing component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        CatlistComponent,
        MockPipe
      ],
      providers: [
        AGLTest
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CatlistComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));


  it(' Returns the correct number of male owned cats  ', async(inject([AGLTest], (service: AGLTest) => {
    const fixture = TestBed.createComponent(CatlistComponent);
    const comp = fixture.debugElement.componentInstance;
    let maleOwnedCats: string  [] = [];
  
    service.getOwnersAndAnimals().then((data) => {
          maleOwnedCats = comp.SortDataByGender(data, 'Male');
      expect(maleOwnedCats.length).toEqual(4);
      expect(maleOwnedCats[0]).toEqual('Garfield');
      expect(maleOwnedCats[1]).toEqual('Tom');
      expect(maleOwnedCats[2]).toEqual('Max');
      expect(maleOwnedCats[3]).toEqual('Jim');
      expect(maleOwnedCats[2]).not.toEqual('Maximus');
    });
  })));

  it('should return the correct number of female owned cats', async(inject([AGLTest], (service: AGLTest) => {
    const fixture = TestBed.createComponent(CatlistComponent);
    const comp = fixture.debugElement.componentInstance;
    let femaleOwnedCats: string  [] = [];
    
    service.getOwnersAndAnimals().then((data) => {
          femaleOwnedCats = comp.SortDataByGender(data, 'Female');
      expect(femaleOwnedCats.length).toEqual(3);
      expect(femaleOwnedCats[0]).toEqual('Garfield');
      expect(femaleOwnedCats[1]).toEqual('Tabby');
      expect(femaleOwnedCats[2]).toEqual('Simba');
    });
  })));
});
