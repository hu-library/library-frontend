import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store';
import { SearchedLocationAction } from '../../../store/actions';
import { Observable } from 'rxjs';
import { SearchLocation } from 'src/app/models/searchLocation.type';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input()
  name: SearchLocation;

  private searchedLocations$: Observable<Map<SearchLocation, boolean>>;
  private searchedLocations: Map<SearchLocation, boolean>;
  private allCheckBoxes: boolean;

  constructor(private store: Store<fromRoot.State>) {
    this.searchedLocations$ = store.select(fromRoot.getSearchedLocations);
    this.searchedLocations = new Map<SearchLocation, boolean>();
  }

  ngOnInit() {
    this.searchedLocations$.subscribe(locations => {
      if (locations) {
        this.searchedLocations = locations;
        this.allCheckBoxes = true;
        this.searchedLocations.forEach((value, key) => {
          if (value === false) { this.allCheckBoxes = false; }
        });
      }
    });
  }

  checkboxChanged() {
    this.store.dispatch(new SearchedLocationAction(this.name));
  }
}
