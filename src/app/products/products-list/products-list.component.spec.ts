import { ComponentFixture, TestBed } from '@angular/core/testing';
import { products } from './products.list';
import { MatTableModule } from '@angular/material/table';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [MatTableModule]
    });
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cut description', () => {
    spyOn(component, 'cutDescription').and.returnValue('test')
    const testDescription = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.";
    const modifiedDescription = component.cutDescription(testDescription)
    expect(modifiedDescription.length).toBeLessThanOrEqual(100)
  });

  it('should get get products', () => {
    spyOn(component, 'cutDescription').and.returnValue('test')
    component.getProducts()
    expect(component.cutDescription).toHaveBeenCalled()
  });
});
