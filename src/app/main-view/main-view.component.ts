import { SmartStoreService } from '../services/smart-store.service';
import { UploadService } from '../services/upload.service';
import { Upload } from '../services/upload';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { OldStuffService } from '../services/old-stuff.service';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  public humidData = null;
  public oldStuff = null;
  public allItems = null;

  @ViewChild('fileInput') fileInput;

  constructor(private db: AngularFirestore, private store: SmartStoreService, private old: OldStuffService, private uploadSrv: UploadService) { }

  ngOnInit() {
    this.getStuff();
  }

  getStuff() {
    console.log('getStuff');
    this.old.checkOldItems().subscribe(oldStuff => {
      console.log('oldStuff', oldStuff);
      if (oldStuff.length) {
        this.oldStuff = oldStuff;
      }
    });

    this.old.getItems().subscribe(allItems => {
      console.log('allitems', allItems);
      if (allItems.length) {
        this.allItems = allItems;
      }
    });

    this.store.makeRequest().subscribe((data) => {
      this.humidData = data.data.building.airquality;
      console.log(data);
    });

    // this.store.trackRFID()
    // // .filter(x: any => x.epc[0] != '*')
    // .subscribe(x => console.log(x));

    this.store.getMQTTEvents().subscribe(x => console.log(x));
  }
}
