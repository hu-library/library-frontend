import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';

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
}
