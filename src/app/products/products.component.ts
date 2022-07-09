import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;

  constructor(private catService:CatalogueService ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts() {
    this.catService.getRessource("/products/search/selectedProduct")
    .subscribe(data=>{
      console.log('data', data)
      this.products = data
    })
  }

}
