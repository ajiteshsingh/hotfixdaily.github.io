import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Category, DisplayCategory } from 'src/app/models/db-collections';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  allCategories: Category[];
  displayCategories: DisplayCategory = {
    important: [],
    more: []
  };
  constructor(private fetchDataService: FetchDataService, private router: Router) { }

  ngOnInit() {
    this.fetchDataService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
      // this.createDisplayCategoriess();
    });
  }

  reRouteHomePage() {
    this.router.navigateByUrl('/');
  }

  ngAfterViewInit() {
    // const element = document.getElementById('logo-name');
    // if (window.innerWidth < 500) {
    //   element.innerText = '[ ]';
    // } else {
    //   element.innerText = '[Array, of, Code]';
    // }
  }

  openGithubRepo() {
    window.open('https://github.com/hotfixdaily/hotfixdaily.github.io');
  }

  replaceChinaApps() {
    this.router.navigateByUrl('/apps/replace-china-apps');
  }

  // createDisplayCategoriess() {
  //   const impCategory = [];
  //   for (let i = 0; i < this.allCategories.length; i++) {
  //     if (i < 4) {
  //       impCategory.push(this.allCategories[i]);
  //     }
  //   }
  //   this.displayCategories.important = impCategory;
  //   if (this.allCategories.length > 4) {
  //     this.displayCategories.more = this._getMoreCategories(
  //       this.allCategories.slice(4)
  //     );
  //   }
  //   console.log('display');
  //   console.log(this.displayCategories);
  // }

  // private _getMoreCategories(categories: Category[]) {
  //   const response: Category[][] = [];
  //   let miniCategories: Category[] = [];
  //   for (let i = 0; i < categories.length; i++) {
  //     if (miniCategories.length === 4) {
  //       response.push(miniCategories);
  //       miniCategories = [];
  //     }
  //     miniCategories.push(categories[i]);
  //   }
  //   return response;
  // }

  selectCategory(category: Category) { }
}
