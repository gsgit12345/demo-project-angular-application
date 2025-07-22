import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.model'; // same interface



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  productCh:Product;
  @Input() index:number;
  @Input() isDiscounted:boolean;
  @Input() ratings!: any; // array input


}
