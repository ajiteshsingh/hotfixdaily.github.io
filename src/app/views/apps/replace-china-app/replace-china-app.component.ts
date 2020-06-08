import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-replace-china-app',
  templateUrl: './replace-china-app.component.html',
  styleUrls: ['./replace-china-app.component.scss']
})
export class ReplaceChinaAppComponent implements OnInit, AfterViewInit {

  count: number;
  constructor(
    private fetchDataService: FetchDataService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const element = document.getElementById('video') as any;
    element.muted = 'muted';
    this.fetchDataService.getDownloadsCount('replace_china_apps').then((c) => {
      this.count = c as number;
    });
    const shareElement = document.getElementById('share-button');
    if (window.innerWidth > 600) {
      shareElement.style.display = 'none';
    }
  }

  downloadAPK() {
    this.fetchDataService.updateCount(this.count + 1);
    this.count += 1;
    // window.open('https://hotfixdaily-media.s3.ap-south-1.amazonaws.com/common/replace-china-apps.apk');
    window.location.href = 'https://hotfixdaily-media.s3.ap-south-1.amazonaws.com/common/replace-china-apps.apk';
  }

  async share() {
    const shareData = {
      title: 'Make India Aatmanirbhar\n',
      text: 'I am removing china apps from my device and installing replacement apps suggested in this app. Try it out\n\n',
      url: 'https://www.arrayofcode.com/apps/replace-china-apps',
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
