import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  private selectedBook$: Observable<Book>;
  private book: Book;

  constructor(private store: Store<fromRoot.State>, private route: ActivatedRoute,
    private router: Router) {
    this.selectedBook$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.selectedBook$.subscribe(book => {
      if (!book) {
        this.router.navigateByUrl('/');
      }
      this.book = book;
    });
  }

}
