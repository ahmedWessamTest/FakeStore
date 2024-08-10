import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ProductsService } from '../products.service';
import { IProducts } from '../iproducts';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, LoadingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  filterNavAnimation: boolean = false;
  filterAnimationFunc():void {
    this.filterNavAnimation = !this.filterNavAnimation;
  }
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
  categoryValue: any = "all";

  getCategoryFilter (event: MouseEvent):void{
    const target = event.target as HTMLSelectElement;
    this.categoryValue = target.value;
  }
}
