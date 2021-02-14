import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
   selector: 'app-recipe-item',
   templateUrl: './recipe-item.component.html',
   styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
   // Gets or recieves data from outside component
   @Input() recipe: Recipe;

   constructor() {}

   ngOnInit(): void {}
}
