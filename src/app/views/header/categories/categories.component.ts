import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/models/db-collections';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnChanges {

  @Input() categories: any;
  showScrollArrows = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.currentValue) {
      this.categories = changes.currentValue;
      console.log(this.categories);
    }
  }

  ngOnInit() {
  }

}
