import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-not-searched-before',
  templateUrl: './not-searched-before.component.html',
  styleUrls: ['./not-searched-before.component.scss']
})
export class NotSearchedBeforeComponent implements OnInit {

  private book$: Observable<Book>;
  private book: Book;

  constructor(private store: Store<fromRoot.State>) {
    this.book$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.book$.subscribe(book => {
      this.book = book;
    });
  }

  beginSearching() {
    this.store.dispatch(new Actions.StartBookSearchAction(this.book.callNumber));
  }
}
