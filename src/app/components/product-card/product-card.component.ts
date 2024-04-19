import { Component, InputSignal, input, } from '@angular/core';
import { Product } from '../../product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',

})
export class ProductCardComponent {
  product: InputSignal<Product> = input.required<Product>();
}
