import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openSocialMedia(socialMedia) {
    switch (socialMedia) {
      case 'twitter':
        window.open('https://twitter.com/array_of_code');
        break;
      case 'instagram':
        window.open('https://instagram.com/arrayofcode');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/Array-of-Code-105959554476995');
    }
  }

}
