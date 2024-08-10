import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDetailsService } from '../get-details.service';
import { IProducts } from '../iproducts';
import { StarRatingComponent } from "../star-rating/star-rating.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [StarRatingComponent, LoadingComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  productDetails!: IProducts;
  productId: string = '';
  constructor(private route: ActivatedRoute, private _GetDetailsService: GetDetailsService){}
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || ''
    if(this.productId){
      this._GetDetailsService.getDetials(this.productId).subscribe({
        next:(res)=>{
          this.productDetails = res;
        },
        error:(err) =>{
          console.error("Details API Error: ",err);
        }
      })
    }

  }
}
