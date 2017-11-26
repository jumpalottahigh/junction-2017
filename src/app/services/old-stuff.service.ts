import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OldStuffService {
  private items;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.items = this.db.collection('items').valueChanges();
  }

  public getItems(): Observable<any> {
    return this.items;
  }

  public checkOldItems(): Observable<any> {

    // TODO:
    // This is how to use the Helvar API
    // GET request using these values
    // device = 0, 3, 8
    // level = 225
    // x = 1, y = 0 - red
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    this.http.get('https://private-anon-280c1bb1d3-junctionhelvar2017.apiary-mock.com/v1/command?device=8&level=255&colour_x=41&colour_y=21', {headers: headers})
    .subscribe(resp => {
      console.log('HERE', resp);
    });


    return this.items.map((items) => {
      return items.filter(item => {
        console.log('item', item, item.depositDate > (new Date().setFullYear(new Date().getFullYear() - 1)));
        return item.depositDate < (new Date().setFullYear(new Date().getFullYear() - 1));
      });
    });
  }
}
