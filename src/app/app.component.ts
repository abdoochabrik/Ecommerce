import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public categories:any;

  constructor(private catService:CatalogueService) {

  }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.catService.getRessource("/categories")
      .subscribe(data => {
        console.log(data);
        this.categories = data;
      }, err => {
        console.log(err);
      }
      ); 
  }
}
