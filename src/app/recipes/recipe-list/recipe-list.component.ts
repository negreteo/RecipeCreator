import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
   selector: 'app-recipe-list',
   templateUrl: './recipe-list.component.html',
   styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
      new Recipe(
         'Roast Brussels Sprouts Kimchi',
         'This is a recipe for roasted brussels sprouts',
         'https://www.seriouseats.com/images/2015/10/20151019-brussels-sprouts-kimchi-roast-recipe-8-kenji-1500x1125.jpg'
      ),
      new Recipe(
         'Roast Brussels Sprouts Kimchi',
         'This is a recipe for roasted brussels sprouts',
         'https://www.seriouseats.com/images/2015/10/20151019-brussels-sprouts-kimchi-roast-recipe-8-kenji-1500x1125.jpg'
      ),
   ];

   constructor() {}

   ngOnInit(): void {}
}
