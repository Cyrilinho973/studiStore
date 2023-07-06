import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { MatTableModule } from '@angular/material/table';
import { DecimalPipePipe } from './decimal-pipe.pipe';


@NgModule({
  declarations: [
    ProductsListComponent,
    DecimalPipePipe
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule {
  
}
