import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-replace-china-app',
  templateUrl: './replace-china-app.component.html',
  styleUrls: ['./replace-china-app.component.scss']
})
export class ReplaceChinaAppComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const element = document.getElementById('video') as any;
    element.muted = 'muted';
  }

}
