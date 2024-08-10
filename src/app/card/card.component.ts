import { Component, Input } from '@angular/core';
import { StarRatingComponent } from "../star-rating/star-rating.component";
import { IProducts } from '../iproducts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [StarRatingComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) productObject!: IProducts;
}
