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

  async share() {
    const shareData = {
      title: 'Replace Chine Apps - Array Of Code',
      text: 'Detect Installed china apps and find replacement for all china apps',
      url: 'http://localhost:4200/apps/replace-china-apps',
    };

    let newNavigator: any;
    newNavigator = window.navigator;
    try {
      await newNavigator.share(shareData);
    } catch (error) {
      console.log(error);
    }
  }

}
