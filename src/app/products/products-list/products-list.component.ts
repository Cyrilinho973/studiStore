import { Component } from '@angular/core';
import { products } from './products.list';

@Component({
  selector: 'studi-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  productsList = products
  displayedColumns: string[] = ['name', 'img', 'description', 'age', 'price', 'partNumber']
  
}
