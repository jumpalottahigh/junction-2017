import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class OldStuffService {

  constructor(private db: AngularFirestore) {}

  public check() {
    this.db.collection('items').valueChanges()
    .subscribe((items: any) => {
      items.forEach(item => {
        if (item.depositeDate > (new Date().setFullYear(new Date().getFullYear() - 1))) {
          console.log('boom');
        }
      });
    });
  }
}
