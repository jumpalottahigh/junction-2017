import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public id = '';
  public name = '';
  public depositeDate = '';

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('items').valueChanges()
    .subscribe(value => {
      console.log(value);
    });
  }

  public addItem(item: any) {
    this.db.collection('items').add(
    {
      id: this.id,
      name: this.name,
      depositeDate: this.depositeDate
    });
  }

}
