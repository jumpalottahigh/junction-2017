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
  public id = '';
  public name = '';
  public depositeDate = '';
  public selectedFiles: FileList | null;
  public currentUpload: Upload;

  public oldStuff = null;

  @ViewChild('fileInput') fileInput;

  constructor(private db: AngularFirestore, private store: SmartStoreService, private old: OldStuffService, private uploadSrv: UploadService) { }

  ngOnInit() {
    this.old.check().subscribe(oldStuff => {
      this.oldStuff = oldStuff;
    });

    this.db.collection('items').valueChanges()
    .subscribe(value => {
      console.log(value);
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
    this.fileInput.nativeElement.click();
  }

  public doUpload(event: any) {
    this.selectedFiles = (event.target as HTMLInputElement).files;
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.uploadSrv.pushUpload(this.currentUpload)
        .subscribe(
        (upload) => {
          console.log('upload finished!');
          setTimeout(() => {
            this.fileInput.nativeElement.value = '';
            this.currentUpload = null;
          }, 2000);
        },
        (error) => {
          console.error('upload error', error);
        });
    } else {
      console.error('No file found!');
    }
  }
}
