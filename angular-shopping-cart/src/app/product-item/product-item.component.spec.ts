import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { Product } from '../cart.service';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  const product: Product = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    quantity: 0,
    total: 0,
    discountPercentage: 0,
    discountedTotal: 0,
    thumbnail: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductItemComponent],
    });

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
