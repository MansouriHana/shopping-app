import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe('A Test Recipe',' This is a simply a test',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recipe('A Test Recipe',' This is a simply a test',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
