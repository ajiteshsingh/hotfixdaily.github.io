import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-replace-china-app',
  templateUrl: './replace-china-app.component.html',
  styleUrls: ['./replace-china-app.component.scss']
})
export class ReplaceChinaAppComponent implements OnInit, AfterViewInit {

  count: number;
  isMobile = false;

  constructor(
    private fetchDataService: FetchDataService,
    private deviceDetectorService: DeviceDetectorService
  ) { }

  ngOnInit() {
    this.isMobile = this.deviceDetectorService.isMobile();
  }

  ngAfterViewInit() {
    const element = document.getElementById('video') as any;
    element.muted = 'muted';
    this.fetchDataService.getDownloadsCount('replace_china_apps').then((c) => {
      this.count = c as number;
    });
  }

  downloadAPK() {
    this.fetchDataService.updateCount(this.count + 1);
    this.count += 1;
    // window.open('https://hotfixdaily-media.s3.ap-south-1.amazonaws.com/common/replace-china-apps.apk');
    window.location.href = 'https://hotfixdaily-media.s3.ap-south-1.amazonaws.com/common/replace-china-apps.apk';
    const notificationElement = document.getElementById('download-notification');
    if (notificationElement) {
      setTimeout(() => {
        notificationElement.style.display = 'flex';
      }, 500);
    }
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
