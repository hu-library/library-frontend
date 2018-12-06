import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { SearchLocation } from '../models/searchLocation.type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<Book[]>('http://localhost:8000/');
  }

  saveSearchedLocations(book: Book) {
    book.callNumber = book.callNumber.replace(/ /g, '-');
    return this.http.post(`http://localhost:8000/searched/${book.callNumber}`,
      { locations: this.getSearchedLocations(book) });
  }

  updateStatus(book: Book) {
    book.callNumber = book.callNumber.replace(/ /g, '-');
    return this.http.post(`http://localhost:8000/status/${book.callNumber}`,
    { status: book.searchStatus });
  }

  librarianDecision(book: Book) {
    book.callNumber = book.callNumber.replace(/ /g, '-');
    return this.http.post(`http://localhost:8000/decision/`, {
      title: book.title,
      callNumber: book.callNumber,
      author: book.author,
      patron: book.patron
    });
  }

  lookAgain(book: Book) {
    book.callNumber = book.callNumber.replace(/ /g, '-');
    return this.http.post(`http://localhost:8000/look-again/`, {
      title: book.title,
      callNumber: book.callNumber,
      author: book.author,
      patron: book.patron
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
