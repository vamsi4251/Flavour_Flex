import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private routes:Router){

  }
  ngOnInit(){

  }
  onclick(){
    this.routes.navigateByUrl('/payment');
  }

}
