import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service";


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})


export class PromisesComponent implements OnInit {
  private loading: boolean = false;
  constructor(private itunes:SearchService) { }

  ngOnInit() {}
  
  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).then( () => this.loading = false)
  }

}
