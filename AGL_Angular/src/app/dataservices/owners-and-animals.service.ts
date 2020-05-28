import { Injectable } from '@angular/core';

export interface Pets {
  name?: string;
  type?: string;
 }

export interface JSONData { 
   name: string; 
   gender: string;
   age: number;
   pets: Pets[]; 
}

export const ownersAndAnimals: JSONData[] = [
  {
    'name': 'Bob',
    'gender': 'Male',
    'age': 23,
    'pets': [
      {
        'name': 'Garfield',
        'type': 'Cat'
      },
      {
        'name': 'Fido',
        'type': 'Dog'
      }
    ]
  },
  {
    'name': 'Jennifer',
    'gender': 'Female',
    'age': 18,
    'pets': [
      {
        'name': 'Garfield',
        'type': 'Cat'
      }
    ]
  },
  {
    'name': 'Steve',
    'gender': 'Male',
    'age': 45,
    'pets': null
  },
  {
    'name': 'Fred',
    'gender': 'Male',
    'age': 40,
    'pets': [
      {
        'name': 'Tom',
        'type': 'Cat'
      },
      {
        'name': 'Max',
        'type': 'Cat'
      },
      {
        'name': 'Sam',
        'type': 'Dog'
      },
      {
        'name': 'Jim',
        'type': 'Cat'
      }
    ]
  },
  {
    'name': 'Samantha',
    'gender': 'Female',
    'age': 40,
    'pets': [
      {
        'name': 'Tabby',
        'type': 'Cat'
      }
    ]
  },
  {
    'name': 'Alice',
    'gender': 'Female',
    'age': 64,
    'pets': [
      {
        'name': 'Simba',
        'type': 'Cat'
      },
      {
        'name': 'Nemo',
        'type': 'Fish'
      }
    ]
  }
];


@Injectable()
export class AGLTest {


    getOwnersAndAnimals(): Promise<JSONData[]> {
        return Promise.resolve(ownersAndAnimals);
    }

}

