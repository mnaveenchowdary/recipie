import { Component, OnInit, Input } from '@angular/core';
import {Recipie} from '../recipie';

@Component({
  selector: 'rb-recipie-details',
  templateUrl: './recipie-details.component.html'
})
export class RecipieDetailsComponent implements OnInit {
  constructor() { }
  @Input() selectedRecipie: Recipie;
  ngOnInit() {
  }

}
