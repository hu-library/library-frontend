import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { Book } from '../../models/book.model';
import { buttonNames } from '../../config';
import { InventoryBook } from '../../models/inventoryBook.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private selectedBook$: Observable<Book>;
  private selectedInventoryBook$: Observable<InventoryBook>;
  private buttonNames = buttonNames;

  constructor(private store: Store<fromRoot.State>) {
    this.selectedBook$ = store.select(fromRoot.getSelectedBook);
    this.selectedInventoryBook$ = store.select(fromRoot.getSelectedInventoryBook);
    store.dispatch(new Actions.ReloadBooksAction());
    store.dispatch(new Actions.LoadInventoryAction());
  }
}
