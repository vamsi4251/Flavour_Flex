import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private routes:Router){

  }
  ngOnInit(){

  }
  onclick(){
    this.routes.navigateByUrl('success')
  }

  

}
