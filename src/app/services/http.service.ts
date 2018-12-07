import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { SearchLocation } from '../models/searchLocation.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllData() {
    return this.http.get<Book[]>('http://localhost:8000/');
  }

  saveSearchedLocations(book: Book) {
    return this.http.post(`http://localhost:8000/searched/${book.callNumber}`,
      { locations: this.getSearchedLocations(book) });
  }

  updateStatus(book: Book, navigate = true) {
    this.http.post(`http://localhost:8000/status/${book.callNumber}`,
      { status: book.searchStatus }).subscribe(() => {
        if (navigate) {
          this.router.navigateByUrl('/');
        }
      });
  }

  librarianDecision(book: Book) {
    this.http.post(`http://localhost:8000/decision/`, {
      title: book.title,
      callNumber: book.callNumber,
      author: book.author,
      patron: book.patron
    }).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  lookAgain(book: Book) {
    this.http.post(`http://localhost:8000/look-again/`, {
      title: book.title,
      callNumber: book.callNumber,
      author: book.author,
      patron: book.patron
    }).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  private getSearchedLocations(book: Book) {
    const result = [];
    book.searchedLocations.forEach((value: boolean, key: SearchLocation) => {
      if (value === true) {
        result.push(key);
      }
    });
    return result;
  }
}
