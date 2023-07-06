import { Injectable } from '@angular/core';
import { Icecream } from '../models/icecream';


@Injectable({
  providedIn: 'root'
})
export class IcecreamservicesService {
  addToCart(details: Icecream) {
    throw new Error('Method not implemented.');
  }

  constructor() {}
  getIcecreamById(id:number):Icecream{
    return this.getIcecreamlist().find(Icecream => Icecream.id==id)!;
  }
  getIcecreamlist():Icecream[]{
    return[
      {
        id:1,
        src:'../assets/images/chocolateicecream.jpg',
        alt:'Image',
        title:'Chocolate Icecream',
        desc:'Chocolate Icecream Cake online from High-Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
      {
        id:2,
        src:'../assets/images/carmelicecream.jpg',
        alt:'Image',
        title:'Caramel Icecream',
        desc:'Caramel Icecream online from High-Quality Bakery in your Cities is a Rich, Delicious, Hygienically  prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India ',
        price: 650,
        btn:''


      },
      {
        id:3,
        src:'../assets/images/minticecream.jpg',
        alt:'Image',
        title:'Mint Icecream',
        desc:'Mint Icecream online from High-Quality Bakery in your Cities is a Rich, Delicious, Hygienically  prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India',
        price: 650,
        btn:''


      },
      {
        id:4,
        src:'../assets/images/straberryicecream.jpg',
        alt:'Image',
        title:'Strawberry Icecream',
        desc:'Strawberry Icecream from High Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
      {
        id:5,
        src:'../assets/images/venillaicecream.jpg',
        alt:'Image',
        title:'Vanilla Icecream',
        desc:'Vanilla Icecream online from High Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
    ]
  }
}
