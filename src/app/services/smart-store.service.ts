import { Socket } from 'ng-socket-io';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http/src/headers';
// import { HttpResponse } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SmartStoreService {
  private url = 'https://woodcityapiqa.azurewebsites.net/api/v1/GraphQL';
  constructor(private http: HttpClient, private socket: Socket) {}

  makeRequest(): Observable<any> {
    let query = {
      query: `
        query {
        building(id: "Junction2017") {
          airquality(for: "24h", groupby: "1h") {
            co2
            humidity
            light
            motion
            temperature
            vOC
            timestamp
          }
        }
      }`
    };


    let body = JSON.stringify(query);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // return null;
    return this.http.post(this.url, body, {headers: headers});
  }

  public trackRFID() {
    return this.socket.fromEvent<{ macAddress: string, orderedRecords: any[] }>('inventory')
      .filter(x => x.macAddress === '00:16:25:12:16:4F' && x.orderedRecords[0].epc[0] !== '*')
      .map(x => x.orderedRecords);
    }
}
