import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store';
import { SearchedLocationAction, SearchedInventoryLocationAction } from '../../../store/actions';
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

  @Input()
  inventory: boolean;

  private searchedLocations$: Observable<Map<SearchLocation, boolean>>;
  private searchedLocations: Map<SearchLocation, boolean>;
  private searchedInventoryLocations$: Observable<Map<SearchLocation, boolean>>;
  private searchedInventoryLocations: Map<SearchLocation, boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchedLocations$ = store.select(fromRoot.getSearchedLocations);
    this.searchedLocations = new Map<SearchLocation, boolean>();
    this.searchedInventoryLocations$ = store.select(fromRoot.getInventorySearchedLocations);
    this.searchedInventoryLocations = new Map<SearchLocation, boolean>();
  }

  ngOnInit() {
    if (this.inventory) {
      this.searchedInventoryLocations$.subscribe(locations => {
        if (locations) {
          this.searchedInventoryLocations = locations;
        }
      })
    }
    else {
      this.searchedLocations$.subscribe(locations => {
        if (locations) {
          this.searchedLocations = locations;
        }
      });
    }
  }

  isChecked(name: SearchLocation) {
    if (this.inventory) {
      return this.searchedInventoryLocations.get(name);
    } else {
      return this.searchedLocations.get(name)
    }
  }

  checkboxChanged() {
    if (this.inventory) {
      this.store.dispatch(new SearchedInventoryLocationAction(this.name));
    } else {
      this.store.dispatch(new SearchedLocationAction(this.name));
    }
  }
}
