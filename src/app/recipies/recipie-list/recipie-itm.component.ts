import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie';

@Component({
  selector: 'rb-recipie-itm',
  templateUrl: './recipie-itm.component.html'
})
export class RecipieItmComponent implements OnInit {
  @Input() recipie: Recipie;
  constructor() { }

  ngOnInit() {
  }

}
