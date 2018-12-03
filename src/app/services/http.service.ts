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

  postData(body) {
    return this.http.post('http://localhost:8000/w', body);
  }

  saveSearchedLocations(book: Book) {
    return this.http.post(`http://localhost:8000/searched/${book.callNumber}`,
      { locations: this.getSearchedLocations(book) });
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
