import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component'

const routes: Routes = [
  {path: 'products', component:ProductsListComponent},
  {path: 'contact', component:ProductsListComponent},
  {path: 'signup', component:ProductsListComponent},
  {path: 'pagenotfound', component:PageNotFoundComponent},
  {path: '',   redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/pagenotfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
