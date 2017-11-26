import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

  constructor() { }

  ngOnInit() {
  }
}
