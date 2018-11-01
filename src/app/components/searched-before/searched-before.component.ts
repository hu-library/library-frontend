import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from '../../models/book.model';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-before',
  templateUrl: './searched-before.component.html',
  styleUrls: ['./searched-before.component.scss']
})
export class SearchedBeforeComponent implements OnInit {

  private book$: Observable<Book>;
  private book: Book;

  private checkboxes: Map<number, boolean> = new Map<number, boolean>();
  private allCheckBoxes: boolean;

  constructor(private store: Store<fromRoot.State>, private router: Router) {
    this.book$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.book$.subscribe(book => this.book = book);
    for (let i = 1; i <= 5; i++) {
      this.checkboxes.set(i, false);
    }
  }

  private allBoxesChecked(): boolean {
    let result = true;
    this.checkboxes.forEach((value: boolean, key: number) => {
      if (value === false) { result = false; }
    });
    return result;
  }
  stopSearching() {
    this.store.dispatch(new Actions.StopBookSearchAction(this.book.id));
    this.router.navigateByUrl('/' + this.book.title + '/final-action');
  }

  found() {
    this.store.dispatch(new Actions.FoundBookAction(this.book.id));
    this.router.navigateByUrl('/' + this.book.title + '/final-action');
  }

  checkboxChanged(numberCheckbox: number) {
    this.checkboxes.set(numberCheckbox, !this.checkboxes.get(numberCheckbox));
    this.allCheckBoxes = this.allBoxesChecked();
  }

}
