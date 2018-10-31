import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from '../../models/book.model';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';

@Component({
  selector: 'app-searched-before',
  templateUrl: './searched-before.component.html',
  styleUrls: ['./searched-before.component.scss']
})
export class SearchedBeforeComponent implements OnInit {

  private book$: Observable<Book>;
  private book: Book;

  constructor(private store: Store<fromRoot.State>) {
    this.book$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.book$.subscribe(book => this.book = book);
  }

  stopSearching() {
    this.store.dispatch(new Actions.StartBookSearchAction(this.book.id));
  }

}
