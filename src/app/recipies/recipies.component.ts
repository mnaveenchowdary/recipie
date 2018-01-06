import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie'

@Component({
  selector: 'rb-recipies',
  templateUrl: './recipies.component.html'
})
export class RecipiesComponent implements OnInit {
  selectedRecipie: Recipie;
  constructor() { }

  ngOnInit() {
  }

}
