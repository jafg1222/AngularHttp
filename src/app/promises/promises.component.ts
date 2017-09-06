import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service";


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})


export class PromisesComponent implements OnInit {

  constructor(private itunes:SearchService) { }

  ngOnInit() {}
  doSearch(term:string) {
    this.itunes.search(term)
  }

}
