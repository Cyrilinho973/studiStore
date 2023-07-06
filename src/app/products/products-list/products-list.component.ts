import { Component } from '@angular/core';
import { products } from './products.list';

@Component({
  selector: 'studi-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  productsList: any
  displayedColumns: string[] = ['name', 'img', 'description', 'age', 'price', 'partNumber', 'details']
  
  cutDescription(description: string) {
    let modifiedDescription = description.substring(0, 27)
    modifiedDescription += '...'
    return modifiedDescription
  }

  getProducts() {
    for(let product of this.productsList) {
      product.description = this.cutDescription(product.description)
    }
  }

  ngOnInit(): void {
    this.productsList = products
    this.getProducts()
  }
}
