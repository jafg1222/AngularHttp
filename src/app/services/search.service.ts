import {Injectable} from "@angular/core";
import {Http,HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable() 
export class SearchService {
  apiRoot:string = 'https://itunes.apple.com/search';
  results:Object[];
  loading:boolean;

  constructor(private http:Http) { 
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
          this.results = res.json().results;        
          resolve();
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }
  }
