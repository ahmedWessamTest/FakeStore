import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ProductsService } from '../products.service';
import { IProducts } from '../iproducts';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: IProducts[] = [];
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res) =>{
        this.products = res.slice(0, 50);
      },
      error:(err)=>{
        console.error("Product API error: ", err)
      }
    })
  }

}
