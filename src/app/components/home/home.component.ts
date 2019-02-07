import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { Book } from '../../models/book.model';
import { buttonNames } from '../../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private allBooks$: Observable<Book[]>;
  private buttonNames = buttonNames;

  constructor(private httpService: HttpService, private store: Store<fromRoot.State>) {
    this.allBooks$ = store.select(fromRoot.getAllBooks);
    store.dispatch(new Actions.ReloadBooksAction());
    store.dispatch(new Actions.LoadInventoryAction());
  }

  ngOnInit() { }
}
