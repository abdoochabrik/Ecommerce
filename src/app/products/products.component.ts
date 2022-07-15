import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;

  constructor(public catService:CatalogueService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    let pathparams1 = this.route.snapshot.params.p1
    
    if(pathparams1 == 1) {
    this.getProducts("/products/search/selectedProduct")
    }
    else if (pathparams1 == 2) {
      let pathparams2 = this.route.snapshot.params.p2
      this.getProducts('/categories/'+pathparams2+'/products')
    }
  }

  private getProducts(url:any) {
    this.catService.getRessource(url)
    .subscribe(data=>{
      console.log('data', data)
      this.products = data
    })
  }

}
