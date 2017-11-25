import { Socket } from 'ng-socket-io';
import * as mqtt from 'mqtt';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http/src/headers';
// import { HttpResponse } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';
import { scan } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Injectable()
export class SmartStoreService {
  private url = 'https://woodcityapiqa.azurewebsites.net/api/v1/GraphQL';
  public client: any = null;
  
  public mqttEvent = new ReplaySubject<{topic: string, message: any}>();

  private mqttArr = [];
  public mqttEvents = new ReplaySubject<{ topic: string, message: any }[]>();



  constructor(private http: HttpClient, private socket: Socket) {
    this.client = mqtt.connect({
      host: 'mqtt.intelligentpackaging.online',
      port: 9001
    });

    this.client.on('connect', () => {
      'Junction.2017.3'
      // this.client.subscribe('location/+/tagEntered');
      // this.client.subscribe('location/+/tagLeft');

      this.client.subscribe('location/Junction.2017.1/tagEntered');
      this.client.subscribe('location/Junction.2017.1/tagLeft');
      this.client.subscribe('location/Junction.2017.2/tagEntered');
      this.client.subscribe('location/Junction.2017.2/tagLeft');
      this.client.subscribe('location/Junction.2017.3/tagEntered');
      this.client.subscribe('location/Junction.2017.3/tagLeft');


      this.client.subscribe('nfc/scan');
    });

    this.client.on('message', (topic, message) => {
      message = message.toStrig();
      this.mqttEvent.next({topic, message});

      this.mqttArr = [...this.mqttArr, {topic, message}];
      this.mqttEvents.next(this.mqttArr);
    });

    this.mqttEvents.scan((agg, val, []) => {
      return [...agg, val];
    })
  }


  public getMQTTEvents(): Observable<{ topic: string, message: any }[]> {
    return this.mqttEvents;
  }

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
