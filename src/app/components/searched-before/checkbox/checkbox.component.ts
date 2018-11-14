import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store';
import { SearchedLocationAction } from '../../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  index: number;

  private searchedLocations$: Observable<Map<number, boolean>>;
  private searchedLocations: Map<number, boolean> = new Map<number, boolean>();
  private allCheckBoxes: boolean;

  constructor(private store: Store<fromRoot.State>) {
    this.searchedLocations$ = store.select(fromRoot.getSearchedLocations);
  }

  ngOnInit() {
    this.searchedLocations$.subscribe(locations => {
      this.searchedLocations = locations;
      this.allCheckBoxes = true;
      this.searchedLocations.forEach((value, key) => {
        if (value === false) { this.allCheckBoxes = false; }
      });
    });
  }

  checkboxChanged(numberCheckbox: number) {
    this.store.dispatch(new SearchedLocationAction(numberCheckbox));
  }
}
