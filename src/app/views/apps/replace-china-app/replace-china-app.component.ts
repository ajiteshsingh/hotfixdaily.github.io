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
  }

  downloadAPK() {
    this.fetchDataService.updateCount(this.count + 1);
    this.count += 1;
    window.open('https://hotfixdaily-media.s3.ap-south-1.amazonaws.com/common/replace-china-apps.apk');
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
