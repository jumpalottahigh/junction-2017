import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class OldStuffService {

  constructor(private db: AngularFirestore) {}

  public check() {
    return new Observable(observer => {
      this.db.collection('items').valueChanges()
      .subscribe((items: any) => {
        const old = [];
        items.forEach(item => {
          if (item.depositeDate > (new Date().setFullYear(new Date().getFullYear() - 1))) {
            old.push(item);
          }
        });
        observer.next(old);
      });
    });
  }
}
