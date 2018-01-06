import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../recipie';

@Component({
  selector: 'rb-recipie-list',
  templateUrl: './recipie-list.component.html'
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [];
  @Output() recipieSelected = new EventEmitter<Recipie>();
  recipie = new Recipie('Dumy', 'dummy recipie', 'http://webneel.com/sites/default/files/images/blog/thumb%20fashion%20photograpy.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipie: Recipie) {
    console.log(recipie);
    this.recipieSelected.emit(recipie);
  }

}
