import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public categories:any;
  private currentCategory:any

  public getCurrentCategory() {
    return this.currentCategory;
   }

  constructor(private catService:CatalogueService, private router:Router) { 
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

  getProductsByCat(c:any) {
    this.currentCategory = c;    
    this.router.navigateByUrl('/products/2/'+c.id);
  }
}
