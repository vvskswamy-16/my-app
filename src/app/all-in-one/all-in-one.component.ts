import { Component } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent {
  productName:string="";
  price:number=0;
  rating:number=0;
  freeDelivery:boolean=true;
  typing:string="";

  cs:number=0;

  products=[
   {productName:'pen',price:10,rating:3,freeDelivery:true},
   {productName:'phone',price:100,rating:2,freeDelivery:false},
   {productName:'shirt',price:400,rating:4,freeDelivery:true},
   {productName:'cap',price:200,rating:5,freeDelivery:false},
   {productName:'mobile case',price:300,rating:2,freeDelivery:true},
   {productName:'remote',price:400,rating:2.5,freeDelivery:false}
  ]

  search(){
    this.products=this.products.filter((product)=>product.productName.includes(this.typing));
  }

  freebee(){
    this.products=this.products.filter(product=>product.freeDelivery==true);
  }

  csz(){
    this.cs=this.products.length;
  }
  pricelh(){
    this.products.sort((a,b)=>a.price-b.price);
  }
  pricehl(){
    this.products.sort((a,b)=>b.price-a.price);
  }
  ratinglh(){
    this.products.sort((m,n)=>m.rating-n.rating);
  }
  ratinghl(){
    this.products.sort((m,n)=>n.rating-m.rating);
  }

  discount(){
    this.products=this.products.map(product=>{
      product.price=product.price/2;
      return product;
    })
  }
  addDeliveryCharges(){
    this.products=this.products.map(product=>{
      product.price=product.price+25;
      return product;
    })
  }

  totalPrice(){
    var total=this.products.reduce((a,b)=>a+b.price,0);
    alert("Total cart price : "+total);

  }
 

  submit(){
    let product={
      productName:this.productName,
      price:this.price,
      rating: this.rating,
      freeDelivery:this.freeDelivery
    }
    this.products.push(product);
  }

  delete(i:number){
    this.products.splice(i,1)
    }
}
