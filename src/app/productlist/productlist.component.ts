import { Component, ViewChild } from '@angular/core';
import { Product } from '../models/product.model'; // same interface


@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent {
  addToCart:number=1;
  email:string="gsgsmca"
  name:string="Iphone";
  price:number=700;
  Color:string="Red";
  Company:string="Apple";
  Location:string="delhi";
  Size:string="medium";
  instock:number=0;
  image:string="/assets/image/cute.jpg"
ratings={
  first:"5star",
  second:"4star",
  third:"3star",
}
products=[
  "Apple",
  "Vivo",
  "Rembo",
  "Harekrishna"

]
priceList:number[]=[100,200,300,400,500]

complexObj:Product[]=[
  {
    id: 101,
    name: 'Laptop',
    categories: ['Electronics', 'Computers'],
    price: 45000,
    discount:20,
  },
  {
    id: 202,
    name: 'Smart‑watch',
    categories: ['Electronics', 'Wearables'],
    price: 12000,
    discount:0,
  },
  {
    id: 303,
    name: 'Blender',
    categories: ['Home', 'Kitchen'],
    price: 3500,
    discount:0,
  }
];

public calculateThePrice():number
{
  this.price=this.price*100;
  return this.price;
}
public onTextEnter(event:any):void
{
  this.email=event.target.value;
  console.log(event.target.value);
}
public addToCartValue():void{
  if(this.addToCart<this.instock)
  {
  this.addToCart++;
  }

}

public removeToCartValue():void{
  if(this.addToCart>=0)
  {
  this.addToCart--;
  }

}
selectedRadioButton:string="false";

onFilterr(value)
{
  console.log("product component");
  this.selectedRadioButton=value;
}

message: string = '';

receiveMessage(data: string) {
  console.log(data)
  this.message = data;
}

//view componnt example 

}