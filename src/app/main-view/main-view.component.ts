import { SmartStoreService } from './../services/smart-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private store: SmartStoreService) { }

  ngOnInit() {
  }

  public addItem() {
    console.log(this)
    this.store.makeRequest().subscribe(x => console.log(x));
  }

}
