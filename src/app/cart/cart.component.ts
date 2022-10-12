import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()
   }

  fetchData =()=>{
    this.myapi.ViewShop().subscribe(
      (data) =>{
        this.ViewShopData=data
      }
    )
  }

  ViewShopData :any= {}

  ngOnInit(): void {
  }

}
