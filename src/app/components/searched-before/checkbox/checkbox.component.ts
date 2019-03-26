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

  @Input()
  value: boolean;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() { }

  checkboxChanged() {
    this.store.dispatch(new SearchedLocationAction(this.name));
  }
}
