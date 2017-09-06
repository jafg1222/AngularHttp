/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonpComponent } from './jsonp.component';

describe('JsonpComponent', () => {
  let component: JsonpComponent;
  let fixture: ComponentFixture<JsonpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
