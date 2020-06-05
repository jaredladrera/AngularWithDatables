import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getData = () => {
    return this.http.get(this.baseUrl);
  }

}
