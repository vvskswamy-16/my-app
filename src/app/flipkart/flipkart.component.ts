import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  ProductName:string='';
  price:number=0;
  rating:number=0;
  deliveryDate:any;
  freeDelivery:boolean=false;
  
  products:any=[
    {name:'mobile',price:30000,rating:3.5,deliveryDate:'12/12/2024',freeDelivery:true},
    {name:'laptop',price:55000,rating:4.5,deliveryDate:'10/10/2024',freeDelivery:false},
    {name:'vivo',price:17500,rating:4.8,deliveryDate:'06/10/2022',freeDelivery:true}
  ];
  
  submit(){
    let product={
      name:this.ProductName,
      price:this.price,
      rating:this.rating,
      deliveryDate:this.deliveryDate,
      freeDelivery:this.freeDelivery
    }
    this.products.push(product);
  }
  delete(i:number){
    this.products.splice(i,1)
  }
}
