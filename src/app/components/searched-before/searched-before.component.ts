import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from '../../models/book.model';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-searched-before',
  templateUrl: './searched-before.component.html',
  styleUrls: ['./searched-before.component.scss']
})
export class SearchedBeforeComponent implements OnInit {

  private book$: Observable<Book>;
  private allChecked$: Observable<boolean>;
  private book: Book;
  private allChecked: boolean;

  private readonly names = [
    'Home',
    'Reshelving Carts',
    'Surrounding Area',
    'Circulation Desk',
    'Bestsellers',
    'Christian Fiction',
    'Entire Section',
    'Switched Letters',
    'Number Mistakes',
    'Brewer Collection'
  ];

  constructor(private store: Store<fromRoot.State>, private router: Router,
              private config: ConfigService) {
    this.book$ = store.select(fromRoot.getSelectedBook);
    this.allChecked$ = store.select(fromRoot.lookedEverywhere);
  }

  ngOnInit() {
    this.book$.subscribe(book => {
      this.book = book;
      if (book && book.searchedLocations) {
        this.allChecked = this.config.checkMapForAllTrue(book.searchedLocations);
      }
    });
  }

  stopSearching() {
    this.store.dispatch(new Actions.StopBookSearchAction(this.book.callNumber));
    this.router.navigateByUrl('/' + this.book.urlID + '/resolve');
  }

  found() {
    this.store.dispatch(new Actions.FoundBookAction(this.book.callNumber));
    this.router.navigateByUrl('/' + this.book.urlID + '/resolve');
  }
}
