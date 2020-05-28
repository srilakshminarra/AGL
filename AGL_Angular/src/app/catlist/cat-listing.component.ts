import { Component , OnInit} from '@angular/core';
import { AGLTest, JSONData } from '../dataservices/owners-and-animals.service';


@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.css']
})

export class CatlistComponent implements OnInit {
   
  catSortOrder = 'asc';
  Mlist: string  [] = [];
  Flist: string [] = [];
  arr: JSONData [];
  
  constructor( private ownersAndAnimalsService: AGLTest) {}

  ngOnInit() {

    // Retrieve data from the "API"
    this.ownersAndAnimalsService.getOwnersAndAnimals().then(
      data => {
          this.Mlist = this.SortDataByGender(data, 'Male');
          this.Flist = this.SortDataByGender(data, 'Female');
        })
        .catch((error) => console.error(error));
      }


  // sorts the data based on the gender of the owner and returns an array
  SortDataByGender(data: JSONData[], genderTest: string) {
    let tmpArray = null;
    let Petarray: string  [] = [];
    for (let x = 0; x < data.length; x++ ) {
      tmpArray = data[x];
      if (tmpArray.pets !== null) {
        if (tmpArray.gender === genderTest) {
          for (let y = 0; y < tmpArray.pets.length; y++ ) {
            if (tmpArray.pets[y].type === 'Cat') {
              Petarray.push(tmpArray.pets[y].name);
            }
          }
         }
        }
    }
    return Petarray;
  }
}
