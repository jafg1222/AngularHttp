import { Component, OnInit } from '@angular/core';
import { SearchItem } from "../class/search-item";
import { JsonpSearchService } from "../services/jsonp.service";
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule, Http, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable } from "rxjs";

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.css']
})
export class JsonpComponent implements OnInit {

  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: JsonpSearchService) {
  }
  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do( () => this.loading = true)
      .switchMap( term => this.itunes.search(term))
      .do( () => this.loading = false )
  }

  doSearch(term: string) {
    this.itunes.search(term);
  }
}
