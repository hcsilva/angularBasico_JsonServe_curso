import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns =  ['id', 'name', 'price', 'action']


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(prd => {
      this.products = prd
      console.log(prd);
    })
  }

}
