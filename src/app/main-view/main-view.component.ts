import { SmartStoreService } from './../services/smart-store.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  public humidData = null; 
  public id = '';
  public name = '';
  public depositeDate = '';

  constructor(private db: AngularFirestore, private store: SmartStoreService) { }

  ngOnInit() {
    this.db.collection('items').valueChanges()
    .subscribe(value => {
      console.log(value);
    });

    this.store.makeRequest().subscribe((data) => {
      this.humidData = data.data.building.airquality
      console.log(data);
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

  public takePhoto() {
    console.log('This takes a photo, stores to Firebase and executes cloud vision using cloud functions');
  }
}
