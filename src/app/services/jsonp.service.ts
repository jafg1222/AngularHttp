import { Injectable } from "@angular/core";
import { HttpModule,Jsonp,JsonpModule } from '@angular/http';
import { SearchItem } from "../class/search-item";

@Injectable()
export class JsonpSearchService {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private jsonp: Jsonp) { 
  }

  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`; 
    return this.jsonp.request(apiURL)  
        .map(res => {
          return res.json().results.map(item => {
            return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
            );
          });
        });
  }
}