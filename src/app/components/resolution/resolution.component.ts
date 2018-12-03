import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss']
})
export class ResolutionComponent implements OnInit {

  private selectedBook$: Observable<Book>;
  private book: Book;

  constructor(private store: Store<fromRoot.State>, private http: HttpService, private router: Router) {
    this.selectedBook$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.selectedBook$.subscribe(book => this.book = book);
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
    const book = {
      ...this.book,
      callNumber: this.book.callNumber.replace(/ /g, '-')
    };
    this.http.updateStatus(book).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/');
    });
  }
}
