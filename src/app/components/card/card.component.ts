import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import * as fromRoot from '../../store';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
import { ButtonNames } from '../../models/buttonName.type';
import * as Actions from '../../store/actions';
import { InventoryBook } from 'src/app/models/inventoryBook.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  title: ButtonNames;

  private className: string;

  private textName: string;
  private buttonColor: string;
  private badgeColor: string;

  private books$: Observable<Book[]>;
  private inventoryBooks$: Observable<InventoryBook[]>;
  private books: Book[] = [];
  private inventoryBooks: InventoryBook[] = [];

  constructor(private store: Store<fromRoot.State>, private router: Router, private configService: ConfigService) {
    this.inventoryBooks$ = store.select(fromRoot.getInventoryBooks);
  }

  ngOnInit() {
    this.setUpCard();

    this.inventoryBooks$.subscribe(books => {
      this.inventoryBooks = books;
      for (const book of this.inventoryBooks) {
        book.callNumber = book.callNumber.replace(/-/g, ' ');
      }
    });
    if (this.className !== 'Inventory') {
      this.books$.subscribe(books => {
        this.books = books;
        for (const book of this.books) {
          book.callNumber = book.callNumber.replace(/-/g, ' ');
        }
      });
    }
  }

  redirect(book: Book | InventoryBook) {
    if (this.configService.isBook(book)) {
      this.store.dispatch(new Actions.SelectBookAction(book));
      // remove parentheses from url because it breaks routing
      book.callNumber = book.callNumber.replace(/\s+/g, '-');
      book.urlID = book.urlID.replace(/(\(|\))/g, '');
      this.router.navigateByUrl('/' + book.urlID);
    } else {
      this.store.dispatch(new Actions.SelectInventoryBookAction(book));
      book.callNumber = book.callNumber.replace(/\s+/g, '-');
      this.router.navigateByUrl(`/inventory/${book.callNumber}`);
    }
  }

  private setUpCard() {
    const title = this.title;
    this.className = title.replace(/\s+/g, '');
    this.textName = this.className + 'Text';

    if (this.title) {
      switch (this.title) {
        case 'Requested By Patron':
          this.books$ = this.store.select(fromRoot.getRequestedByPatronBooks);
          break;
        case 'Ongoing':
          this.books$ = this.store.select(fromRoot.getOngoingBooks);
          break;
        case 'Follow Up':
          this.books$ = this.store.select(fromRoot.getFollowUpBooks);
          break;
        case 'Awaiting Librarian Decision':
          this.books$ = this.store.select(fromRoot.getAwaitingDecisionBooks);
          break;
        case 'Searched But Not Found':
          this.books$ = this.store.select(fromRoot.getMissingBooks);
          break;
      }
      if (this.title === 'Requested By Patron' ||
        this.title === 'Inventory' ||
        this.title === 'Awaiting Librarian Decision') {
        this.buttonColor = 'btn-info';
        this.badgeColor = 'badge-primary';
      } else if (this.title === 'Ongoing' ||
        this.title === 'Follow Up' || this.title === 'Searched But Not Found') {
        this.buttonColor = 'btn-primary';
        this.badgeColor = 'badge-success';
      }
    }
  }
}
