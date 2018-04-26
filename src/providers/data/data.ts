import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  items: any;

  constructor(public http: HttpClient) {
    this.items = [
      {title: 'Dr. De Vries'},
      {title: 'Dr. Huisman'},
      {title: 'Dr. Zwart'},
      {title: 'Dr. Van Vliet'},
      {title: 'Dr. Ngo'},
      {title: 'Dr. Hoppenreijs'}
  ]

  }

  filterItems(searchTerm){
 
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }); 

  }
}
