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

<<<<<<< HEAD
  public addItem() {
    console.log('Saves to firebase the entry.')
  }
  
  public takePhoto() {
    console.log('This takes a photo, stores to Firebase and executes cloud vision using cloud functions')
=======
  public addItem(item: any) {
    this.db.collection('items').add(
    {
      id: this.id,
      name: this.name,
      depositeDate: this.depositeDate
    });
>>>>>>> e7d488930410c3f709a2c94a13ff66afa7391a5d
  }
}
