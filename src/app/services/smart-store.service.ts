import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpResponse } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SmartStoreService {
  private url = 'https://woodcityapiqa.azurewebsites.net/api/v1/GraphQL';
  constructor(private http: HttpClient) { 
  }

  makeRequest(): Observable<HttpResponse> {
    const body = "{ building(id:\"Junction2017\") { airquality { co2, timestamp }}}"
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url, body, { headers });
  }


}
