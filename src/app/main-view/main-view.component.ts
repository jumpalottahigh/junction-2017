import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public addItem() {
    console.log('Saves to firebase the entry.')
  }
  
  public takePhoto() {
    console.log('This takes a photo, stores to Firebase and executes cloud vision using cloud functions')
  }
}
