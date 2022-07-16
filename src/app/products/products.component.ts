import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;

  constructor(public catService:CatalogueService, private route:ActivatedRoute, private router:Router ) {
  
   }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd){
        let url = val.url
        console.log('url', url)
        let p1 = this.route.snapshot.params.p1
        if(p1 == 1) {
          this.getProducts("/products/search/selectedProduct")
          }
          else if (p1 == 2) {
            let p2 = this.route.snapshot.params.p2
            this.getProducts('/categories/'+p2+'/products')
          }
      }
    })

  }

  private getProducts(url:any) {
    this.catService.getRessource(url)
    .subscribe(data=>{
      console.log('data', data)
      this.products = data
    })
  }

}
