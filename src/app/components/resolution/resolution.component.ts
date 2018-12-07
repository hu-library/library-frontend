import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { buttons } from '../../config';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss']
})
export class ResolutionComponent implements OnInit {

  private selectedBook$: Observable<Book>;
  private book: Book;
  private buttonValue: 'Librarian decision' | 'Look again' | 'Found' | '';
  private buttonCSS: string;
  private buttons = buttons;

  constructor(private store: Store<fromRoot.State>, private http: HttpService, private router: Router) {
    this.selectedBook$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.selectedBook$.subscribe(book => {
      if (!book) {
        this.router.navigateByUrl('/');
      }
      this.book = book;
    });
    this.buttonCSS = 'card-title buttons';
  }

  checkPatronInfo(id: string): boolean {
    if (id === 'name') {
      const name = this.book.patron.name;
      return name !== 'UNKNOWN' && name !== '' && name !== 'N/A';
    } else if (id === 'hNumber') {
      const num = this.book.patron.hNumber;
      return num !== 'UNKNOWN' && num !== '' && num !== 'N/A';
    } else if (id === 'email') {
      const email = this.book.patron.email;
      return email !== 'UNKNOWN' && email !== '' && email !== 'N/A';
    }
  }

  updateStatus() {
    if (this.buttonValue) {
      if (this.buttonValue === 'Librarian decision') {
        this.http.librarianDecision(this.book);
        this.book.searchStatus = 'Stop searching';
      } else if (this.buttonValue === 'Look again') {
        this.http.lookAgain(this.book);
        this.book.searchStatus = 'Delay searching';
      }
      this.http.updateStatus(this.book);
    } else if (this.book.searchStatus === 'Found') {
      this.http.updateStatus(this.book);
    } else {
      this.buttonCSS += ' invalid-buttons';
      setTimeout(() => {
        this.buttonCSS = 'card-title buttons';
      }, 500);
    }
  }
}
