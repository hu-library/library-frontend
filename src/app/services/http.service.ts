import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { SearchLocation } from '../models/searchLocation.type';
import { Router } from '@angular/router';
import { backendLocation } from '../config';
import { InventoryBook } from '../models/inventoryBook.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllData() {
    return this.http.get<Book[]>(`${backendLocation}/`);
  }

  getInventoryData() {
    return this.http.get<InventoryBook[]>(`${backendLocation}/inventory`);
  }

  saveSearchedLocations(book: Book) {
    return this.http.post(`${backendLocation}/searched/${book.callNumber.replace(/\s+/g, '-')}`,
      { locations: this.getSearchedLocations(book) });
  }

  saveSearchedInventoryLocations(book: InventoryBook) {
    return this.http.post(`${backendLocation}/inventory/searched/${book.callNumber.replace(/\s+/g, '-')}`,
      { locations: this.getSearchedInventoryLocations(book) });
  }

  saveInventoryBookIsMissing(book: InventoryBook) {
    this.http.post(`${backendLocation}/inventory/missing/${book.callNumber.replace(/\s+/g, '-')}`,
      { book }).subscribe();
  }

  foundInventoryBook(book: InventoryBook, foundOrMissing: string) {
    this.http.post(`${backendLocation}/inventory/found/${book.callNumber.replace(/\s+/g, '-')}`,
      { book: foundOrMissing }).subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

  updateStatus(book: Book, navigate = true) {
    this.http.post(`${backendLocation}/status/${book.callNumber.replace(/\s+/g, '-')}`,
      { status: book.searchStatus }).subscribe(() => {
        if (navigate) {
          this.router.navigateByUrl('/');
        }
      });
  }

  setFoundLocation(book: Book, foundLocation: string) {
    this.http.post(`${backendLocation}/location/${book.callNumber.replace(/\s+/g, '-')}`,
    { foundLocation }).subscribe();
  }

  librarianDecision(book: Book) {
    this.http.post(`${backendLocation}/decision/`, {
      title: book.title,
      callNumber: book.callNumber,
      author: book.author,
      patron: book.patron
    }).subscribe(() => {
      this.updateStatus(book);
    });
  }

  lookAgain(book: Book) {
    this.http.post(`${backendLocation}/look-again/`, {
      title: book.title,
      callNumber: book.callNumber,
      author: book.author,
      patron: book.patron
    }).subscribe(() => {
      this.updateStatus(book);
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

  private getSearchedInventoryLocations(book: InventoryBook) {
    const result = [];
    if (book && book.searchedLocations) {
      book.searchedLocations.forEach((val, key) => {
        if (val === true) {
          result.push(key);
        }
      });
    }
    return result;
  }
}
