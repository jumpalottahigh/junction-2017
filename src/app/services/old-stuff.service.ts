import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class OldStuffService {
  private items;

  constructor(private db: AngularFirestore) {
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
    // https://private-anon-280c1bb1d3-junctionhelvar2017.apiary-mock.com/v1/command?device=3&level=155&colour_x=1&colour_y=0

    // Headers:
    // 'Content-Type', 'application/json'
    // 'Accept', 'application/json'

    return this.items.map((items) => {
      return items.filter(item => {
        console.log('item', item, item.depositDate > (new Date().setFullYear(new Date().getFullYear() - 1)));
        return item.depositDate < (new Date().setFullYear(new Date().getFullYear() - 1));
      });
    });
  }
}
