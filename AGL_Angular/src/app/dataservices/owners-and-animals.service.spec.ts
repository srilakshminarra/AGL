/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AGLTest } from './owners-and-animals.service';

describe('OwnersAndAnimalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AGLTest]
    });
  });

  it('should establish a service', async(inject([AGLTest], (service: AGLTest) => {
    expect(service).toBeTruthy();
  })));

  
  it('should return an array of objects', async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value.length).toBe(6); 
    });
  })));

  it('should return an array of objects containing gender property', async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].gender).toBeTruthy;
    });
  })));

  it('should return an array of objects containing gender property which is equals the string "Male"', 
      async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].gender).toBe ('Male');
    });
  })));


  it('should return an array of objects containing pets property', async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].pets).toBeTruthy;
    });
  })));
    
  it('should be falsey when property not valid', async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].junkProperty).toBeFalsy;
    });
  })));
  
  it('should return an array of pets in the pets property', async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].pets.length).toBe(2);
    });
  })));

  it('should return an array of pets in the pets property with a name property', 
      async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].pets[0].name).toBeTruthy;
    });
  })));

  it('should return an array of pets in the pets property with a name property which equals the string "Garfield"', 
      async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].pets[0].name).toBe('Garfield');
    });
  })));

  it('should return an array of pets in the pets property with a type property', 
      async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].pets[0].type).toBeTruthy;
    });
  })));

  it('should return an array of pets in the pets property with a type property which equals the string "Cat"', 
      async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[0].pets[0].type).toBe('Cat');
    });
  })));

  it('should return null pets ', async(inject([AGLTest], (service: AGLTest) => {
    service.getOwnersAndAnimals().then((value) => {
      expect(value[2].pets).toEqual(null);
    });
  })));

});

